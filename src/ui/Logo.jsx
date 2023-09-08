import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link
      to="/"
      className="text-3xl font-bold uppercase tracking-wide text-indigo-400"
    >
      Clips
    </Link>
  );
}

export default Logo;
