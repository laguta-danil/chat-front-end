import { message } from 'antd';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface ChatState {
	name: string
	users: Array<string>
	messages: Array<any>
	_id: string
}

const initialState: Array<ChatState> = [
	{name: '1',
	users: ['1','2'],
	messages: ['sadfasd', '234324', '34214'],
	_id: '12'
}
]

export const fetchChats = createAsyncThunk('chats/fetchAll', async thunkAPI => {
	try {
		const res: any = await axios.get(`http://localhost:5000/chats`)
		const data = res.data
		console.log(data)
		return data
	} catch (e: any) {
		return e
	}
})

export const addNewChat = createAsyncThunk(
	'chats/addNewChat',
	async (chatData: any, thunkAPI) => {
		try {
			const res: any = await axios.post(`http://localhost:5000/chats`, chatData)
			return
		} catch (error) {
			console.log(error)
		}
	}
)

export const deleteChatById = createAsyncThunk(
	'chats/deleteChatById',
	async (id: string, thunkAPI) => {
		try {
			const res: any = await axios.delete(`http://localhost:5000/chats/${id}`)
		} catch (error) {
			console.log(error)
		}
	}
)

export const addMessageInChat = createAsyncThunk(
  'chats/addMessages', 
  async ({id, text}: any, thunkAPI) => {
    try {
	const res: any = await axios.put(`http://localhost:5000/chats/${id}`)
	const data = res.data
	const messages = data

	// console.log(data)
	return data
  } catch (e) {
	  return(null)
  }
}
)

export const chatSlice = createSlice({
	name: 'chats',
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
		linkToChat: (state: any, action) => {
			return
		}
	},
	extraReducers: {
		[fetchChats.fulfilled.type]: (state, action) => {
			return (state = action.payload)
		},
		[fetchChats.pending.type]: state => {},
		[fetchChats.rejected.type]: (state, action: PayloadAction<any>) => {},
		[addNewChat.fulfilled.type]: (state, action) => {
			return [...state, action.payload] && console.log(action.payload)
		},
		[addNewChat.pending.type]: state => {},
		[addNewChat.rejected.type]: (state, action: PayloadAction<string>) => {},
		[deleteChatById.fulfilled.type]: (state, action) => {
			console.log(action.payload)
			return state.filter(item => item._id !== action.payload)
		},
		[deleteChatById.pending.type]: state => {},
		[deleteChatById.rejected.type]: (
			state,
			action: PayloadAction<string>
		) => {},
		[addMessageInChat.fulfilled.type]: (state, action) => {
			const chat = state.filter((el: any) => el.id === action.payload )
			console.log(chat)
		}
	},
})

export default chatSlice.reducer
