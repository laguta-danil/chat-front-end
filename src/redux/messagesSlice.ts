import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MessageState {
  message: string;
  users: Array<string>;
  id: number;
}
const initialState: Array<MessageState> = [
  {
    message: "odsad",
    users: [],
    id: 1,
  },
  {
    message: "dasdasd",
    users: [],
    id: 2,
  },
  {
    message: "asdasd",
    users: [],
    id: 3,
  },
];

export const messagesSlice = createSlice({
  name: "ms",
  initialState,
  reducers: {
    addMessages: (state: any, action: any) => {
      console.log(action);

      state = state.push({message: action.payload, users: [], id: state.length += 1  });
      console.log(state);
    },
    // deleteMessage: (state, action: PayloadAction<MessagesState>) => {

    //   state.id -= 1
    // }
  },
});

// Action creators are generated for each case reducer function
export const { addMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
