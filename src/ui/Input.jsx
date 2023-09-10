import { forwardRef } from 'react';

function Input({ value, onChange, type, id, placeholder, ...props }, ref) {
  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full rounded-sm border border-gray-50 bg-transparent px-3 py-2 transition-colors duration-300 disabled:bg-gray-600"
      {...props}
    />
  );
}

export default forwardRef(Input);
