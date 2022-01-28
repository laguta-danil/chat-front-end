import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MessageState {
	message: string
	userId: string
	id: number
}
const initialState: Array<MessageState> = [
	{
		message: 'First message',
		userId: '',
		id: 1,
	},
	{
		message: 'Second message',
		userId: '',
		id: 2,
	},
	{
		message: 'Third message',
		userId: '',
		id: 3,
	},
]

export const messagesSlice = createSlice({
	name: 'ms',
	initialState,
	reducers: {
		addMessages: (state: any, action) => {
			state = state.push({
				message: action.payload,
				userId: 'Name1',
				id: (state.length += 1),
			})
		},
		deleteMessage: (state: any, action) => {
			return state.filter((el: any) => el.id !== action.payload)
		},
	},
})

// Action creators are generated for each case reducer function
export const { addMessages, deleteMessage } = messagesSlice.actions

export default messagesSlice.reducer
