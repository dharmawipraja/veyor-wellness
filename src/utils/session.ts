import { SESSIONS } from "../fixtures/appointmentData"

export const getDetailSession = (sessionName: string) => {
  return SESSIONS.find(session => session.name === sessionName)
}