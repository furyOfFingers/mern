import { createSlice } from "@reduxjs/toolkit";

// const notifications = createSlice({
//   name: "notification",
//   initialState: {
//     notification: null,
//   },
//   reducers: {
//     setNotification(state, action) {
//       state.notification = action.payload;
//     },
//   },
// });

// export const { setNotification } = notifications.actions;
// export default notifications.reducer;

const notifications = createSlice({
  name: "notification",
  initialState: {
    notification: null,
  },
  reducers: {
    setNotification(state, action) {
      state.notification = action.payload;
    },
  },
});

export const { setNotification } = notifications.actions;
export default notifications.reducer;
