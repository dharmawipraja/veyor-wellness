import React from 'react';
import { useAppSelector } from '../hooks/useAppReducer';
import { formatDate } from '../utils/date';
import { getDetailSession } from '../utils/session';
import Button from '../components/Button';

type Navigate = (newActiveTab: string) => () => void;
type Props = {
  navigate: Navigate;
};

const onChangeAppointment = (navigate: Navigate) => () => {
  navigate('Choose Appointment')();
};

const onCreateNewAppointment = (navigate: Navigate) => () => {
  navigate('Choose Appointment')();
};

const Confirmation: React.FC<Props> = ({ navigate }) => {
  const { sessionType, date, time } = useAppSelector(
    (state) => state.appointment
  );
  const sessionDetail = getDetailSession(sessionType);
  const formattedDate = formatDate(new Date(date), true);

  return (
    <div className="flex justify-start px-5 pt-8">
      <div className="flex flex-col flex-[2] items-start">
        <h1>{sessionType}</h1>
        <h1 className="text-gray-600">{formattedDate}</h1>
        <h1 className="text-gray-600">{time}</h1>
        <p className="py-5">
          Veyor Wellnes{' '}
          <span className="pl-3">${sessionDetail?.price.toFixed(2)}</span>
        </p>
        <div className="flex gap-2 mb-5">
          <Button title="Cancel" onClick={onChangeAppointment(navigate)} />
          <Button title="Reschedule" onClick={onChangeAppointment(navigate)} />
        </div>
        <Button
          title="Schedule another Appointment"
          variant="SECONDARY"
          onClick={onCreateNewAppointment(navigate)}
        />
      </div>
      <div className="flex flex-col items-start flex-1 border-l-[1px] border-l-gray-300 pl-5 gap-3">
        <h2 className="text-left">
          Easily book and manage appointments with Veyor Wellness on your phone
        </h2>
        <p className="text-left">
          Get the mobile app by opening the camera on your phone, and scanning
          this QR code:
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
