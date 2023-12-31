import { useState } from 'react';
import LinkButton from './LinkButton';
import Modal from './Modal';
import AuthTabs from '../features/authentication/AuthTabs';
import { useUser } from '../features/authentication/useUser';
import { useLogout } from '../features/authentication/useLogout';

function MainNav() {
  const { isAuthenticated } = useUser();
  const { logout } = useLogout();
  const [showLoginModal, setShowLoginModal] = useState(false);

  function handleLogout(e) {
    e.preventDefault();
    if (window.confirm('Are you sure you want to logout?')) logout();
  }

  function handleShowLoginModal(e) {
    e.preventDefault();
    setShowLoginModal(true);
  }

  return (
    <nav>
      <ul className="flex gap-4">
        {isAuthenticated ? (
          <>
            <LinkButton to="/manage" navLink>
              Manage
            </LinkButton>
            <LinkButton to="/upload" navLink>
              Upload
            </LinkButton>
            <LinkButton onClick={handleLogout}>Logout</LinkButton>
          </>
        ) : (
          <>
            <li>
              <LinkButton onClick={handleShowLoginModal}>
                Login / Register
              </LinkButton>
            </li>
          </>
        )}

        <li>
          <LinkButton to="/about" navLink>
            About
          </LinkButton>
        </li>
      </ul>

      <Modal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        title="Your Account"
      >
        <AuthTabs closeModal={() => setShowLoginModal(false)} />
      </Modal>
    </nav>
  );
}

export default MainNav;
