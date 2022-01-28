import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface ChatState {
  name: string;
  users: Array<string>;
  messages: Array<any>;
  _id: string;
}

const initialState: Array<ChatState> = [
  
];

export const fetchChats = createAsyncThunk(
  "chats/fetchAll",
  async (thunkAPI) => {
    try {
      const res: any = await axios.get(`http://localhost:5000/chats`);
      const data = res.data;
      return data;
    } catch (e: any) {
      return e;
    }
  }
);

export const addNewChat = createAsyncThunk(
  "chats/addNewChat",
  async (chatData: any, thunkAPI) =>{
    try {
      const res: any = await axios.post(`http://localhost:5000/chats`, chatData)
      return 
       
    } catch (error) {
      console.log(error)
    }
  }

)

export const deleteChatById = createAsyncThunk(
  "chats/deleteChatById",
  async (thunkAPI) => {
    try {
      const res: any = await axios.delete(`http://localhost:5000/chats/:id`)
    } catch (error) {
      console.log(error)
    }
  }
)

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchChats.fulfilled.type]: (state, action) => {
      return state = action.payload;
    },
    [fetchChats.pending.type]: (state) => {},
    [fetchChats.rejected.type]: (state, action: PayloadAction<any>) => {},
    [addNewChat.fulfilled.type]: (state, action) => {
      
      return [...state, action.payload] && console.log(action.payload)
    },
    [addNewChat.pending.type]: (state) => {},
    [addNewChat.rejected.type]: (state, action: PayloadAction<string>) => {},
  },
  
});


export default chatSlice.reducer;
