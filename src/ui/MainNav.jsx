import LinkButton from './LinkButton';

function MainNav() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <LinkButton to="login">Login / Register</LinkButton>
        </li>
        <li>
          <LinkButton to="about">About</LinkButton>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
