import { SLOT_TIME } from "../fixtures/appointmentData";
import { getBookedTime } from "./storage"

export const getAvailableSlot = (date: string) => {
  const bookedSlot = getBookedTime(date);
  const availableTime = SLOT_TIME.filter(item => !bookedSlot.includes(item));

  return availableTime
}