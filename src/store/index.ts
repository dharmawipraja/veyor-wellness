import { configureStore } from '@reduxjs/toolkit'

import sessionReducer from './sessionSlice';
import appointmentReducer from './appointmentSlice';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    appointment: appointmentReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
