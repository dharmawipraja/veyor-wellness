import { createSlice } from '@reduxjs/toolkit'

export type SessionState = {
  sessionType: string
}

const initialState: SessionState = {
  sessionType: ''
}

export const counterSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    saveSession: (state, action) => {
      state.sessionType = action.payload
    }
  }
})

export const { saveSession } = counterSlice.actions

export default counterSlice.reducer