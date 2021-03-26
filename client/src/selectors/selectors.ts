import IAppState from "types/state";

export const selectNotification = (state: IAppState) =>
  state?.notification?.notification;
