import { Outlet } from 'react-router-dom';
import Header from './Header';
import Container from './Container';

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}

export default AppLayout;
