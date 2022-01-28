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

// export const addNewChat = createAsyncThunk(
//   "chats/addNewChat",
//   async (chatData: any, thunkAPI) =>{
//     try {
//       const res: any = await axios.post(`http://localhost:5000/chats`, chatData );
//           const data = res.data;
//           console.log(data);
//     } catch (error) {
//       console.log(error)
//     }
//   }

// )

// export const deleteChatById = createAsyncThunk(
//   "chats/deleteChatById",
//   async (thunkAPI) => {
//     try {
//       const res: any = await axios.delete(`http://localhost:5000/chats/:id`)
//     } catch (error) {
//       console.log(error)
//     }
//   }
// )

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat: (state: any, action) => {
      return [...state, { ...action.payload, id: 0, users: [] }];
    },
    deleteChat: (state: any, action) => {
      return state.filter((item: any) => item.id != action.payload);
    },
  },
  extraReducers: {
    [fetchChats.fulfilled.type]: (state, action) => {
      return state = action.payload;
    },
    [fetchChats.pending.type]: (state) => {},
    [fetchChats.rejected.type]: (state, action: PayloadAction<string>) => {},
    // [addNewChat.fulfilled.type]: (state, action) => {
    //   return [...state, action.payload];
    // },
    // [addNewChat.pending.type]: (state) => {},
    // [addNewChat.rejected.type]: (state, action: PayloadAction<string>) => {},
  },
  
});

export const { addChat, deleteChat } = chatSlice.actions;

export default chatSlice.reducer;
