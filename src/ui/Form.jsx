function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      {children}
    </form>
  );
}

export default Form;
