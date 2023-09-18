function IconButton({ children, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center text-lg transition-colors duration-300 enabled:hover:text-indigo-400 ${
        disabled ? 'cursor-not-allowed opacity-70' : ''
      }`}
    >
      {children}
    </button>
  );
}

export default IconButton;
