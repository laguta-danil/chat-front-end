import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		username: '',
		email: '',
		isFetching: false,
		isSuccess: false,
		isError: false,
		errorMessage: '',
	},
	reducers: {},
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

export default userSlice.reducer
