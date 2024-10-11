import { configureStore } from '@reduxjs/toolkit'

import appointmentReducer from './appointmentSlice';

export const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
