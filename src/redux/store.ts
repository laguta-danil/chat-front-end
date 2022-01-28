import messagesSlice from './messagesSlice'
import { configureStore } from '@reduxjs/toolkit'
import chatSlice from './chatSlice'
import userSlice from './userSlice'

export const store = configureStore({
	reducer: {
		user: userSlice,
		ms: messagesSlice,
		chat: chatSlice,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
