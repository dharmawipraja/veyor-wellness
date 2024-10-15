import { createSlice } from '@reduxjs/toolkit';

export type AppointmentState = {
  sessionType: string;
  date: string;
  time: string;
};

const initialState: AppointmentState = {
  sessionType: '',
  date: new Date().toISOString(),
  time: '',
};

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    saveSession: (state, action) => {
      state.sessionType = action.payload;
    },
    saveDate: (state, action) => {
      state.date = action.payload;
    },
    saveTime: (state, action) => {
      state.time = action.payload;
    },
    resetAppointment: () => initialState,
  },
});

export const { saveSession, saveDate, saveTime, resetAppointment } =
  appointmentSlice.actions;

export default appointmentSlice.reducer;
