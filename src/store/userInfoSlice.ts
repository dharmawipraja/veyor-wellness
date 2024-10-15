import { createSlice } from '@reduxjs/toolkit';

export type UserInfoState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

const initialState: UserInfoState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
};

export const userInfoSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    saveUserInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { saveUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
