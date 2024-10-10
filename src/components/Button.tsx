import { MouseEventHandler, useMemo } from "react";

type ButtonProps = {
  title: string;
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'PRIMARY' | 'SECONDARY';
}

const getButtonStyles = (variant: string) => {
  const styleMapping: Record<string, string> = {
    PRIMARY: "text-white bg-black ",
    SECONDARY: "w-32 p-2 text-black bg-white border border-gray-700"
  }

  return styleMapping[variant]
}

const Button = ({ title, type, onClick = () => {}, variant = 'PRIMARY' }: ButtonProps) => {
  const styles = getButtonStyles(variant);

  const renderButton = useMemo(() => (
    <button type={type} className={`${styles} max-w-prose p-2 rounded-md`} onClick={onClick}>
      <span>{title}</span>
    </button>
  ), [])

  return (
    renderButton
  )
}

export default Button