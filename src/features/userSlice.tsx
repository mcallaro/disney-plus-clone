import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface UserState {
  name: string;
  photo: string;
}

const initialState = {
  name: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.photo = action.payload.photo;
    },
    setSignOut: (state) => {
      state.name = "";
      state.photo = "";
    },
  },
});

export const { setUserLogin, setSignOut } = userSlice.actions;

export const selectUserName = (state: RootState) => state.user.name;
export const selectUserPhoto = (state: RootState) => state.user.photo;

export default userSlice.reducer;