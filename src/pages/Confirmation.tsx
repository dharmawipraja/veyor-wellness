import React from "react"
import { useAppSelector } from "../hooks/useAppReducer"

type Navigate = (newActiveTab: string) => () => void;
type Props = {
  navigate: Navigate
}

const Confirmation: React.FC<Props> = () => {
  const { firstName, lastName, email, phone } = useAppSelector(state => state.userInfo);

  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  )
}

export default Confirmation