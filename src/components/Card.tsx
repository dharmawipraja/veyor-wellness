import React, { MouseEventHandler, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>
};

const Card: React.FC<CardProps> = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="flex flex-col items-start w-full p-5 border border-gray-300 rounded-md">
      {children}
    </div>
  )
}

export default Card