import React from "react";

import Card from "../components/Card";
import { SESSIONS } from "../fixtures/appointmentData";
import { SessionType } from "../types";
import Calendar from "../components/Calendar";
import Button from "../components/Button";
import SessionDropdown from "../components/SessionDropdown";
import { useAppDispatch, useAppSelector } from "../hooks/useAppReducer";
import { AppDispatch } from "../store";
import { saveSession } from "../store/sessionSlice";

type Props = {
  navigate: (newActiveTab: string) => () => void
}

const onSessionClick = (name: string, dispatch: AppDispatch) => () => {
  dispatch(saveSession(name))
}

const renderSessionItem = (session: SessionType, dispatch: AppDispatch) => {
  const { name, duration, price } = session

  return (
    <div key={name} className="mt-2">
      <Card onClick={onSessionClick(name, dispatch)}>
        <p className="font-semibold">{name}</p>
        <span>{duration} @ $ {price.toFixed(2)}</span>
      </Card>
    </div>
  )
}

const Appointment: React.FC<Props> = ({ navigate }) => {
  const dispatch = useAppDispatch()
  const { sessionType } = useAppSelector(state => state.session)
  const { date, time } = useAppSelector(state => state.appointment)
  const isValid = !!sessionType && !!date && !!time

  return (
    <div className="flex flex-col gap-3">
      { !sessionType
        ? SESSIONS.map(session => renderSessionItem(session, dispatch))
        : <SessionDropdown data={SESSIONS} selectedData={sessionType} />
      }
      {sessionType && <Calendar />}
      {isValid && <Button title="Continue >>" onClick={navigate('Your Info')} />}
    </div>
  )
}

export default Appointment