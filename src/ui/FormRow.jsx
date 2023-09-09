function FormRow({ children, label, error }) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <p className="text-center text-red-400">{error}</p>}
    </div>
  );
}

export default FormRow;
