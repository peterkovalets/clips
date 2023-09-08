function Button({ children, disabled = false, ...props }) {
  return (
    <button
      disabled={disabled}
      className="rounded-sm bg-indigo-400 px-3 py-2 transition-all duration-300 enabled:hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
