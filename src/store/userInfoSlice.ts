import { createSlice } from '@reduxjs/toolkit'

export type UserInfoState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string
}

const initialState: UserInfoState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
}

export const userInfoSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    saveuserInfo: (state, action) => {
      return { ...state, ...action.payload }
    },
  }
})

export const { saveuserInfo } = userInfoSlice.actions

export default userInfoSlice.reducer