import { createSlice } from '@reduxjs/toolkit'

export type AppointmentState = {
  date: string;
  time: string
}

const initialState: AppointmentState = {
  date: new Date().toISOString(),
  time: ''
}

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    saveDate: (state, action) => {
      state.date = action.payload
    },
    saveTime: (state, action) => {
      state.time = action.payload
    }
  }
})

export const { saveDate, saveTime } = appointmentSlice.actions

export default appointmentSlice.reducer