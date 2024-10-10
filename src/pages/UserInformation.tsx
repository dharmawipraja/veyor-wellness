import React from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { useForm, UseFormGetValues } from "react-hook-form"

type Navigate = (newActiveTab: string) => () => void;
type Props = {
  navigate: Navigate
}
type Inputs = {
  firstName: '',
  lastName: string;
  phone: string;
  email: string;
}

const onSubmit = (getValues: UseFormGetValues<Inputs>, navigate: Navigate) => () => {
  console.log('SUBMIT', getValues())
  navigate('Confirmation')()
}

const UserInformation: React.FC<Props> = ({ navigate }) => {
  const {
    control,
    formState: { isValid },
    getValues,
    handleSubmit
  } = useForm<Inputs>({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    },
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit(getValues, navigate))}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:gap-2 md:flex-row">
          <Input control={control} name='firstName' style='md:w-[350px] w-full' label='Name' placeholder='First Name' required rules={{ required: 'First name required' }} />
          <Input control={control} name='lastName' style='w-full' placeholder='Last Name' required rules={{ required: 'Last name required' }} />
        </div>
        <Input control={control} name='phone' style='w-full' label='Phone' />
        <Input control={control} name='email' style='w-full' label='Email' required rules={{ required: 'Email required', pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Your email address is invalid"
          } }} />
        <div className="flex items-start py-4">
          {isValid && <Button type='submit' title="Continue Appointment >>" />}
        </div>
      </div>
    </form>
  )
}

export default UserInformation