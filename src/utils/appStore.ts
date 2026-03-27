import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default appStore;
//bcs ts gives error i.e is not defined the type of store
//so we export type of store from appstore
export type RootState = ReturnType<typeof appStore.getState>;
