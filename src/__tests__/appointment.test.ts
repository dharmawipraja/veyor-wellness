import { saveBookedTime, getAvailableSlot } from '../utils/appointment';
import { SLOT_TIME } from '../fixtures/appointmentData';

describe('Appointment Service', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('saveBookedTime', () => {
    it('should save booked time to localStorage', () => {
      const date = '2024-10-15T10:00:00Z';
      const time = '10:00';

      saveBookedTime(date, time);

      const getFromStorage = localStorage.getItem('2024-10-15');

      const savedData = getFromStorage && JSON.parse(getFromStorage);
      expect(savedData).toEqual({ booked: ['10:00'] });
    });

    it('should append to existing booked times', () => {
      const date = '2024-10-15T10:00:00Z';
      saveBookedTime(date, '10:00');
      saveBookedTime(date, '11:00');

      const getFromStorage = localStorage.getItem('2024-10-15');

      const savedData = getFromStorage && JSON.parse(getFromStorage);
      expect(savedData).toEqual({ booked: ['10:00', '11:00'] });
    });
  });

  describe('getAvailableSlot', () => {
    it('should return all slots if no booked times exist', () => {
      const availableSlots = getAvailableSlot('2024-10-15T10:00:00Z');
      expect(availableSlots).toEqual(SLOT_TIME);
    });

    it('should return available slots excluding booked times', () => {
      const date = '2024-10-15T10:00:00Z';
      saveBookedTime(date, '10:00');
      saveBookedTime(date, '11:00');

      const availableSlots = getAvailableSlot(date);
      expect(availableSlots).toEqual(
        SLOT_TIME.filter((slot) => slot !== '10:00' && slot !== '11:00')
      );
    });
  });
});
