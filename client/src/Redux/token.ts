import { createSlice } from "@reduxjs/toolkit";

const authenticate = createSlice({
  name: "get authenticate",
  initialState: {
    token: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authenticate.actions;
export default authenticate.reducer;
