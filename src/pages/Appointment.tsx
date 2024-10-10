import React, { Dispatch, SetStateAction, useState } from "react";

import Card from "../components/Card";
import { SESSIONS } from "../fixtures/appointmentData";
import { SessionType } from "../types";
import Calendar from "../components/Calendar";
import Button from "../components/Button";
import SessionDropdown from "../components/SessionDropdown";

type Props = {
  navigate: (newActiveTab: string) => () => void
}
type SetSession = Dispatch<SetStateAction<string>>

const onSessionClick = (name: string, setSession: SetSession) => () => {
  setSession(name)
}

const renderSessionItem = (session: SessionType, setSession: SetSession) => {
  const { name, duration, price } = session

  return (
    <div key={name} className="mt-2">
      <Card onClick={onSessionClick(name, setSession)}>
        <p className="font-semibold">{name}</p>
        <span>{duration} @ $ {price.toFixed(2)}</span>
      </Card>
    </div>
  )
}

const Appointment: React.FC<Props> = ({ navigate }) => {
  const [session, setSession] = useState('');

  return (
    <div className="flex flex-col gap-3">
      { !session
        ? SESSIONS.map(session => renderSessionItem(session, setSession))
        : <SessionDropdown data={SESSIONS} selectedData={session} setSelectedData={setSession} />
      }
      {session && <Calendar />}
      <Button title="Continue >>" onClick={navigate('Your Info')} />
    </div>
  )
}

export default Appointment