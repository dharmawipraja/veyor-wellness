import React from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';

import Button from '../components/Button';
import Input from '../components/Input';
import { useForm, UseFormGetValues } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../hooks/useAppReducer';
import { formatDate } from '../utils/date';
import { AppDispatch } from '../store';
import { saveUserInfo } from '../store/userInfoSlice';
import { saveBookedTime } from '../utils/appointment';

type Navigate = (newActiveTab: string) => () => void;
type Props = {
  navigate: Navigate;
};
type Inputs = {
  firstName: '';
  lastName: string;
  phone: string;
  email: string;
};

const onSubmit =
  (
    dispatch: AppDispatch,
    getValues: UseFormGetValues<Inputs>,
    navigate: Navigate,
    date: string,
    time: string
  ) =>
  () => {
    const data = getValues();

    dispatch(saveUserInfo(data));
    saveBookedTime(date, time);
    navigate('Confirmation')();
  };

const onBack = (navigate: Navigate) => () => {
  navigate('Choose Appointment')();
};

const UserInformation: React.FC<Props> = ({ navigate }) => {
  const dispatch = useAppDispatch();
  const {
    control,
    formState: { isValid },
    getValues,
    handleSubmit,
  } = useForm<Inputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    },
    mode: 'onChange',
  });
  const { sessionType, date, time } = useAppSelector(
    (state) => state.appointment
  );
  const formattedDate = formatDate(new Date(date));

  return (
    <div className="px-5">
      <div className="flex flex-col items-start mb-9">
        <p className="font-semibold">
          {sessionType} {formattedDate} {time}
        </p>
        <p
          onClick={onBack(navigate)}
          className="flex items-center gap-2 text-green-500 underline cursor-pointer"
        >
          <FaAngleDoubleLeft />
          Change
        </p>
      </div>
      <form
        onSubmit={handleSubmit(
          onSubmit(dispatch, getValues, navigate, date, time)
        )}
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:gap-2 md:flex-row">
            <Input
              control={control}
              name="firstName"
              style="md:w-[350px] w-full"
              label="Name"
              placeholder="First Name"
              required
              rules={{ required: 'First name required' }}
            />
            <Input
              control={control}
              name="lastName"
              style="w-full"
              placeholder="Last Name"
              required
              rules={{ required: 'Last name required' }}
            />
          </div>
          <Input control={control} name="phone" style="w-full" label="Phone" />
          <Input
            control={control}
            name="email"
            style="w-full"
            label="Email"
            required
            rules={{
              required: 'Email required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Your email address is invalid',
              },
            }}
          />
          <div className="flex items-start py-4">
            {isValid && (
              <Button type="submit" title="Continue Appointment" withIcon />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserInformation;
