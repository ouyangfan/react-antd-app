import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface UserState {
  username: string | null;
  token: string | null;
}

const initialState: UserState = {
  username: null,
  token: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // 同步操作
  reducers: {
    setUserName(state, action) {
      state.username = action.payload.username
    },
    setToken(state, action) {
      state.token = action.payload.token
    },
    setUserNull(state) {
      state.username = null
      state.token = null
    }
  },
  // 异步操作
  extraReducers: {

  },
});

export const { setUserName, setToken, setUserNull } = userSlice.actions
