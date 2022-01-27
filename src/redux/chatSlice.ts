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
        state = state.push({...action.payload, id: 0, users: []}) 
    },
  }
})


export const { addChat } = chatSlice.actions

export default chatSlice.reducer