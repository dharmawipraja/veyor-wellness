import { SLOT_TIME } from '../fixtures/appointmentData';

export const saveBookedTime = (date: string, time: string) => {
  let booked = [];
  const key = date.split('T')[0];
  const dateExist = localStorage.getItem(key);

  if (dateExist) {
    booked = JSON.parse(dateExist).booked;
  }

  booked.push(time);

  localStorage.setItem(key, JSON.stringify({ booked }));
};

const getBookedTime = (date: string) => {
  const key = date.split('T')[0];
  const dateExist = localStorage.getItem(key);

  if (dateExist) {
    return JSON.parse(dateExist).booked;
  }

  return [];
};

export const getAvailableSlot = (date: string) => {
  const bookedSlot = getBookedTime(date);
  const availableTime = SLOT_TIME.filter((item) => !bookedSlot.includes(item));

  return availableTime;
};
