import { useMemo } from 'react'
import DatePicker from "react-datepicker";
import { addMonths } from "date-fns/addMonths";

import { useAppDispatch, useAppSelector } from '../hooks/useAppReducer';
import { AppDispatch } from '../store';
import { saveDate, saveTime } from '../store/appointmentSlice';
import { getAvailableSlot } from '../utils/appointment';

import "../css/datepicker.css";

const onChange = (dispatch: AppDispatch) => (date: Date | null) => {
  date && dispatch(saveDate(date.toISOString()));
};

const onSelectTime = (value: string, dispatch: AppDispatch) => () => {
  dispatch(saveTime(value))
}

const renderRadioButton = (value: string, selectedTime: string, dispatch: AppDispatch) => (
  <label key={value} className='flex gap-2'>
    <input type="radio" value={value} checked={value === selectedTime} onChange={onSelectTime(value, dispatch)} />
    {value}
  </label>
)

const Calendar = () => {
  const { date, time } = useAppSelector(state => state.appointment);
  const dispatch = useAppDispatch();
  const availableSlot = getAvailableSlot(date)
  const currentDate = new Date()

  const renderCalendar = useMemo(() => (
    <div>
      <DatePicker
        selected={new Date(date)}
        onChange={onChange(dispatch)}
        minDate={currentDate}
        maxDate={addMonths(currentDate, 12)}
        dateFormatCalendar={"MMMM yyyy"}
        showMonthYearDropdown
        inline
      />
    </div>
  ), [date])

  const renderTime = useMemo(() => (
    <div className='flex flex-col items-start justify-start'>
      <p className='my-5 font-bold'>Please select a time</p>
      {availableSlot.map(value => renderRadioButton(value, time, dispatch))}
    </div>
  ), [date, time])

  return (
    <div className='py-8'>
      {renderCalendar}
      {renderTime}
    </div>
  )
}

export default Calendar