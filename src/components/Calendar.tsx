import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import DatePicker from "react-datepicker";
import { SLOT_TIME } from '../fixtures/appointmentData';

import "react-datepicker/dist/react-datepicker.css";

type SetDate = Dispatch<SetStateAction<Date>>
type SetTime = Dispatch<SetStateAction<string>>


const onChange = (setSelectedDate: SetDate) => (date: Date | null) => {
  date && setSelectedDate(date);
};

const onSelectTime = (value: string, setSelectedTime: SetTime) => () => {
  setSelectedTime(value)
}

const renderRadioButton = (value: string, selectedTime: string, setSelectedTime: SetTime) => (
  <label key={value} className='flex gap-2'>
    <input type="radio" value={value} checked={value === selectedTime} onChange={onSelectTime(value, setSelectedTime)} />
    {value}
  </label>
)

const Calendar = () => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selectedTime, setSelectedTime] = useState('');

  const renderCalendar = useMemo(() => (
    <DatePicker
        selected={selectedDate}
        onChange={onChange(setSelectedDate)}
        minDate={currentDate}
        inline
      />
  ), [selectedDate])

  const renderTime = useMemo(() => (
    <div className='flex flex-col items-start justify-start'>
      <p className='my-5 font-bold'>Please select a time</p>
      {SLOT_TIME.map(value => renderRadioButton(value, selectedTime, setSelectedTime))}
    </div>
  ), [selectedTime])

  return (
    <div className='py-8'>
      {renderCalendar}
      {renderTime}
    </div>
  )
}

export default Calendar