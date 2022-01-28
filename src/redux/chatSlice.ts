import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ChatState {
	title: string
	users: Array<string>
  messages: Array<any>
	id: string
}

const initialState: Array<ChatState> = [
	{
		title: 'Chat 1',
		users: [],
    messages: [],
		id: '1',
	},
	{
		title: 'Chat 2',
		users: [],
    messages: [],
		id: '2',
	},
	{
		title: 'Chat 3',
		users: [],
    messages: [],
		id: '3',
	},
]

export const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		addChat: (state: any, action) => {
			return [...state, { ...action.payload, id: 0, users: [] }]
		},
		deleteChat: (state: any, action) => {
			return state.filter((item: any) => item.id != action.payload)
		},
	},
})

export const { addChat, deleteChat } = chatSlice.actions

export default chatSlice.reducer
