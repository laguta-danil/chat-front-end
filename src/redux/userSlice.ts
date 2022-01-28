import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		name: '',
		email: '',
		isFetching: false,
		isSuccess: false,
		isError: false,
		errorMessage: '',
	},
	reducers: {
		clearState: (state) => {
			state.name = '';
		  state.email = '';
			state.isError = false;
			state.isSuccess = false;
			state.isFetching = false;

			return state;
		}
	},
	extraReducers: {},
})

// export const signUpUser = createSlice ({
//     name:'signUpUser',
//     initialState: {
//         username: '',
//         email: '',
//         isFetching: false,
//         isSuccess: false,
//         isError: false,
//         errorMessage: '',
//     },
//     reducers: {

//     },
//     extraReducers: {

//     },

// })

export const userSelector = (state: { user: any }) => state.user
export const {clearState} = userSlice.actions;

export default userSlice.reducer
