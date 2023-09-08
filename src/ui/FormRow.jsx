function FormRow({ children, label }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={children.props.id}>{label}</label>
      {children}
    </div>
  );
}

export default FormRow;
