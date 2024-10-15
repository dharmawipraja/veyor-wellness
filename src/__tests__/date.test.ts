import {
  getMonthIndex,
  getMonthName,
  addMonths,
  generateMonthYear,
  formatDate,
} from '../utils/date';

describe('Date Utility Functions', () => {
  test('getMonthIndex should return the correct index for a given month', () => {
    expect(getMonthIndex("January")).toBe(0);
    expect(getMonthIndex("February")).toBe(1);
    expect(getMonthIndex("December")).toBe(11);
    expect(getMonthIndex("InvalidMonth")).toBe(-1);
  });

  test('getMonthName should return the correct month name for a given date', () => {
    const date = new Date(2023, 0, 1);
    expect(getMonthName(date)).toBe("January");
    
    const date2 = new Date(2023, 11, 1);
    expect(getMonthName(date2)).toBe("December");
  });

  test('addMonths should correctly add months to a date', () => {
    const date = new Date(2023, 0, 31);
    const newDate = addMonths(date, 1);
    expect(newDate.getFullYear()).toBe(2023);
    expect(newDate.getMonth()).toBe(1);
    expect(newDate.getDate()).toBe(28);
  });

  test('generateMonthYear should return an array of month-year strings', () => {
    const result = generateMonthYear(12);
    expect(result.length).toBe(13);
    expect(result[0]).toMatch(/^\w+ \d{4}$/);
  });

  test('formatDate should return formatted date strings', () => {
    const date = new Date(2023, 0, 1);
    expect(formatDate(date)).toBe("January, 1 2023");
    expect(formatDate(date, true)).toBe("Sunday, January, 1 2023");
  });
});
