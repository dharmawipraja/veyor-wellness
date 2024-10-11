import React, { useState } from "react";
import Card from "./Card";
import { SessionType } from "../types";
import { SESSIONS } from "../fixtures/appointmentData";
import { AppDispatch } from "../store";
import { useAppDispatch } from "../hooks/useAppReducer";
import { saveSession } from "../store/appointmentSlice";

type SetDropdown = React.Dispatch<React.SetStateAction<boolean>>;
type Props = {
  data: SessionType[]
  selectedData: string;
}

const openDropdown = (setIsDropdownOpen: SetDropdown) => () => {
  setIsDropdownOpen(true);
};

const onSelect = (
  item: string,
  dispatch: AppDispatch,
  setIsDropdownOpen: SetDropdown
) => {
  return () => {
    dispatch(saveSession(item));
    setIsDropdownOpen(false);
  };
};

const SessionDropdown: React.FC<Props> = ({ data, selectedData }) => {
  const dispatch = useAppDispatch()
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const label = SESSIONS.find(session => session.name === selectedData);

  return (
    <div>
      <Card onClick={openDropdown(setIsDropdownOpen)}>
        <p className="font-semibold">{label?.name}</p>
        <span>{label?.duration} @ ${label?.price.toFixed(0)}</span>
      </Card>
      {isDropdownOpen && (
          <div className="absolute z-10 translate-y-6 bg-white border border-gray-300 rounded max-w-prose md:w-full">
            <ul className="flex flex-col items-start p-2">
              {data.map((item: SessionType) => (
                <li
                  key={item.name}
                  onClick={onSelect(item.name, dispatch, setIsDropdownOpen)}
                  className="flex flex-col items-start w-full gap-2 p-4 transition-all duration-200 rounded hover:bg-gray-200">
                  <p className="font-semibold">{item.name}</p>
                  <span>{item.duration} @ ${item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
};

export default SessionDropdown;
