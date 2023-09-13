import { forwardRef } from 'react';

function Input(
  {
    value,
    onChange,
    type,
    id,
    placeholder,
    defaultValue,
    disabled = false,
    ...props
  },
  ref,
) {
  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      type={type}
      id={id}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={disabled}
      className="w-full rounded-sm border border-gray-50 bg-transparent px-3 py-2 transition-colors duration-300 disabled:cursor-not-allowed disabled:bg-gray-600"
      {...props}
    />
  );
}

export default forwardRef(Input);
