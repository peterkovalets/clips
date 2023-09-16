function IconButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center text-lg transition-colors duration-300 hover:text-indigo-400"
    >
      {children}
    </button>
  );
}

export default IconButton;
