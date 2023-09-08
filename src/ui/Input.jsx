function Input({ value, onChange, ...props }) {
  return (
    <input
      value={value}
      onChange={onChange}
      className="w-full rounded-sm border border-gray-50 bg-transparent px-3 py-2"
      {...props}
    />
  );
}

export default Input;
