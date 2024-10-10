import { MouseEventHandler } from "react";

type ButtonProps = {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant?: 'PRIMARY' | 'SECONDARY';
}

const getButtonStyles = (variant: string) => {
  const styleMapping: Record<string, string> = {
    PRIMARY: "text-white bg-black ",
    SECONDARY: "w-32 p-2 text-black bg-white border border-gray-700"
  }

  return styleMapping[variant]
}

const Button = ({ title, onClick, variant = 'PRIMARY' }: ButtonProps) => {
  const styles = getButtonStyles(variant);

  return (
    <button className={`${styles} w-32 p-2 rounded-md`} onClick={onClick}>
      <span>{title}</span>
    </button>
  )
}

export default Button