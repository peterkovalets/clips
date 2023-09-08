import { Link } from 'react-router-dom';

function LinkButton({ children, to, ...props }) {
  const className = 'transition-colors duration-300 hover:text-indigo-400';

  if (!to)
    return (
      <a href="#" className={className} {...props}>
        {children}
      </a>
    );

  return (
    <Link to={to} className={className} {...props}>
      {children}
    </Link>
  );
}

export default LinkButton;
