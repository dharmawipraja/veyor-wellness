const MONTH: Record<string, number> = {
  "January": 0,
  "February": 1,
  "March": 2,
  "April": 3,
  "May": 4,
  "June": 5,
  "July": 6,
  "August": 7,
  "September": 8,
  "October": 9,
  "November": 10,
  "December": 11,
}

export const mapMonth = (month: string) => MONTH[month]

export const getAvailableMonth = () => {
  const result = [];
  const today = new Date();
  
  today.setMonth(today.getMonth() + 0);
  
  for (let i = 0; i <= 12; i++) {
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();
    result.push(`${month} ${year}`);
    
    today.setMonth(today.getMonth() + 1);
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