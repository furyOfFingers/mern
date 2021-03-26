import { createSlice } from "@reduxjs/toolkit";

const authenticate = createSlice({
  name: "get authenticate",
  initialState: {},
  reducers: {
    getAuthenticate(_, action) {
      return action.payload;
    },
  },
});

export const { getAuthenticate } = authenticate.actions;
export default authenticate.reducer;
