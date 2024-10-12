const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getMonthIndex = (month: string) => MONTHS.indexOf(month)

export const getMonthName = (date: Date) => MONTHS[date.getMonth()];

export const addMonths = (date: Date, months: number = 12) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months + 1);

  newDate.setDate(0); // This sets the date to the last day of the month

  return newDate;
}

export const generateMonthYear = (max: number = 12) => {
  const result = [];
  const currentDate = new Date();
  
  for (let i = 0; i <= max; i++) {
      const monthIndex = currentDate.getMonth() + i; // Get current month index and add i
      const year = currentDate.getFullYear() + Math.floor(monthIndex / 12); // Calculate year
      const month = new Date(currentDate.getFullYear(), monthIndex % 12).toLocaleString('default', { month: 'long' }); // Get month name

      result.push(`${month} ${year}`); // Push formatted string into the result array
  }
  
  return result;
}


export const formatDate = (date: any, withDayName: boolean = false) => {
  const parts = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', weekday: 'long', day: 'numeric'}).formatToParts(date);
  const formattedCustomDate = withDayName 
    ? `${parts[0].value}, ${parts[2].value}, ${parts[4].value} ${parts[6].value}`
    : `${parts[2].value}, ${parts[4].value} ${parts[6].value}`

  return formattedCustomDate
}