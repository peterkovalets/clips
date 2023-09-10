import { Link, NavLink } from 'react-router-dom';

function LinkButton({ children, to, navLink = false, ...props }) {
  const className = 'transition-colors duration-300 hover:text-indigo-400';

  if (!to)
    return (
      <a href="#" className={className} {...props}>
        {children}
      </a>
    );

  if (navLink)
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${className} ${isActive ? 'text-indigo-400' : ''}`
        }
        {...props}
      >
        {children}
      </NavLink>
    );

  return (
    <Link to={to} className={className} {...props}>
      {children}
    </Link>
  );
}

export default LinkButton;
