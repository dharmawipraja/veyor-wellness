import { useMemo } from 'react'
import DatePicker from "react-datepicker";
import { SLOT_TIME } from '../fixtures/appointmentData';

import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch, useAppSelector } from '../hooks/useAppReducer';
import { AppDispatch } from '../store';
import { saveDate, saveTime } from '../store/appointmentSlice';


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

  const renderCalendar = useMemo(() => (
    <DatePicker
        selected={new Date(date)}
        onChange={onChange(dispatch)}
        minDate={new Date()}
        inline
      />
  ), [date])

  const renderTime = useMemo(() => (
    <div className='flex flex-col items-start justify-start'>
      <p className='my-5 font-bold'>Please select a time</p>
      {SLOT_TIME.map(value => renderRadioButton(value, time, dispatch))}
    </div>
  ), [time])

  return (
    <div className='py-8'>
      {renderCalendar}
      {renderTime}
    </div>
  )
}

export default Calendar