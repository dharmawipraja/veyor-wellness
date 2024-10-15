import { useMemo } from 'react'
import DatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";

import { useAppDispatch, useAppSelector } from '../hooks/useAppReducer';
import { AppDispatch } from '../store';
import { saveDate, saveTime } from '../store/appointmentSlice';
import { getAvailableSlot } from '../utils/appointment';

import "../css/datepicker.css";
import { addMonths, generateMonthYear, getMonthIndex, getMonthName } from '../utils/date';

const MAX_MONTH = 6;

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

const renderCalendarHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps) => {
  const months = generateMonthYear(MAX_MONTH);

  return (
    <div className='flex items-center justify-between h-10 m-3'>
      {<button className='px-5' onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        {"<"}
      </button>}
      <select
        className='w-full h-full px-5 border border-gray-300 rounded-md'
        value={`${getMonthName(date)} ${date.getFullYear()}`}
        onChange={({ target: { value } }) => {
          const fullDate = value.split(' ');
          const month = getMonthIndex(fullDate[0])
          const year = Number(fullDate[1])

          changeMonth(month)
          changeYear(year)
        }}
      >
        {months.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button className='px-5' onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        {">"}
      </button>
    </div>
  )
}

const Calendar = () => {
  const { date, time } = useAppSelector(state => state.appointment);
  const dispatch = useAppDispatch();
  const availableSlot = getAvailableSlot(date)
  const currentDate = new Date()

  const renderCalendar = useMemo(() => {
    return (
      <div>
        <DatePicker
          selected={new Date(date)}
          onChange={onChange(dispatch)}
          minDate={currentDate}
          maxDate={addMonths(currentDate, MAX_MONTH)}
          dateFormatCalendar={"MMMM yyyy"}
          inline
          renderCustomHeader={props => renderCalendarHeader(props)}
        />
      </div>
    )
  }, [date])

  const renderTime = useMemo(() => {
    return (
      <div className='flex flex-col items-start justify-start'>
        <p className='my-5 font-bold'>Please select a time</p>
        {availableSlot.map(value => renderRadioButton(value, time, dispatch))}
      </div>
    )
  }, [date, time])

  return (
    <div className='py-8'>
      {renderCalendar}
      {renderTime}
    </div>
  )
}

export default Calendar