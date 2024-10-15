import { MouseEventHandler, useMemo } from 'react';

import { FaAngleDoubleRight } from 'react-icons/fa';

type ButtonProps = {
  title: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'PRIMARY' | 'SECONDARY';
  withIcon?: boolean;
};

const getButtonStyles = (variant: string) => {
  const styleMapping: Record<string, string> = {
    PRIMARY: 'text-white bg-black',
    SECONDARY: 'text-black bg-white border border-gray-700',
  };

  return styleMapping[variant];
};

const Button = ({
  title,
  type = 'button',
  onClick = () => {},
  variant = 'PRIMARY',
  withIcon,
}: ButtonProps) => {
  const styles = getButtonStyles(variant);

  const renderButton = useMemo(
    () => (
      <button
        type={type}
        className={`inline-flex items-center min-w-32 justify-center py-2 px-5 rounded-md ${styles}`}
        onClick={onClick}
      >
        <div
          className={`flex items-center ${withIcon ? 'justify-between' : 'justify-center'} flex-1`}
        >
          {title}
          {withIcon && <FaAngleDoubleRight />}
        </div>
      </button>
    ),
    []
  );

  return renderButton;
};

export default Button;
