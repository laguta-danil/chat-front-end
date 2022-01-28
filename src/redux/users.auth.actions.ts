import { createAsyncThunk } from "@reduxjs/toolkit";

export const signupUser: any = createAsyncThunk(
    'users/signupUser',
    async ({ name, email, password }:any, thunkAPI) => {
      try {
        const response = await fetch('http://localhost:5000/user/create', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name,
						email,
						password,
					}),
				})
        let data = await response.json();
        console.log('data', data);
  
        if (response.status === 200) {
          localStorage.setItem('token', data.token);
          return { ...data, username: name, email: email };
        } else {
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e:any) {
        console.log('Error', e.response.data);
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  
  export const loginUser: any = createAsyncThunk(
    'users/login',
    async ({ email, password }:any, thunkAPI) => {
      try {
        const response = await fetch(
          'https://mock-user-auth-server.herokuapp.com/api/v1/auth',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );
        let data = await response.json();
        console.log('response', data);
        if (response.status === 200) {
          localStorage.setItem('token', data.token);
          return data;
        } else {
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e:any) {
        console.log('Error', e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  
  export const fetchUserBytoken: any = createAsyncThunk(
    'users/fetchUserByToken',
    async ({ token }:any, thunkAPI) => {
      try {
        const response = await fetch(
          'https://mock-user-auth-server.herokuapp.com/api/v1/users',
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              Authorization: token,
              'Content-Type': 'application/json',
            },
          }
        );
        let data = await response.json();
        console.log('data', data, response.status);
  
        if (response.status === 200) {
          return { ...data };
        } else {
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e:any) {
        console.log('Error', e.response.data);
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
  