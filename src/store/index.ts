import { configureStore } from '@reduxjs/toolkit'

import appointmentReducer from './appointmentSlice';
import userInfoReducer from './userInfoSlice';

export const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
    userInfo: userInfoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
