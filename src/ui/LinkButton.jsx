import { Link } from 'react-router-dom';

function LinkButton({ children, to }) {
  return (
    <Link
      to={to}
      className="transition-colors duration-300 hover:text-indigo-400"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
