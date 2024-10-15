import { useController } from 'react-hook-form';

import type { Control, FieldValues, Path } from 'react-hook-form';

type Rules = {
  required?: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
};

type InputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  rules?: Rules;
  label?: string;
  required?: boolean;
  placeholder?: string;
  style?: string;
};

const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { field, fieldState } = useController(props);
  const { error } = fieldState;
  const { label, required, placeholder, style } = props;

  return (
    <div
      className={`flex flex-col items-start gap-1 p-1 ${error ? 'bg-red-200' : ''} ${style}`}
    >
      {label ? (
        <span>
          {label} {required ? '*' : ''}
        </span>
      ) : (
        <span
          className={`hidden ${error ? 'text-red-200' : 'text-white'} md:block`}
        >
          label
        </span>
      )}
      <input
        className="w-full p-2 border border-gray-300 rounded-sm"
        type="text"
        placeholder={placeholder}
        {...field}
      />
      {error && <p className="text-sm text-red-700">{error.message}</p>}
    </div>
  );
};

export default Input;
