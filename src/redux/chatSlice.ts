import { createSlice, PayloadAction } from '@reduxjs/toolkit'



export interface ChatState {
    title: string,
    users: Array<string>,
    id: string, 
  }

const initialState: Array<ChatState> = [{
  title: 'Chat 1',
  users: [],
  id: '1', 
}, {
    title: 'Chat 2',
    users: [],
    id: '2', 
  }, {
    title: 'Chat 3',
    users: [],
    id: '3', 
  }]

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state: any, action) => {
      return [...state, {...action.payload, id:(state.length+1), users: []}]
    },
    deleteChat: (state: any, action) => {
      return state.filter((item:any)=>item.id !=action.payload)
    }
  }
})


export const { addChat, deleteChat } = chatSlice.actions

export default chatSlice.reducer