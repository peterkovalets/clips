import Container from './Container';
import Logo from './Logo';
import MainNav from './MainNav';

function Header() {
  return (
    <header className="bg-gray-700 py-4">
      <Container>
        <div className="flex items-center gap-7">
          <Logo />
          <MainNav />
        </div>
      </Container>
    </header>
  );
}

export default Header;
