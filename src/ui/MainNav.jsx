import { useState } from 'react';
import LinkButton from './LinkButton';
import Modal from './Modal';
import LoginForm from '../features/authentication/LoginForm';

function MainNav() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <LinkButton
            onClick={(e) => {
              e.preventDefault();
              setShowLoginModal(true);
            }}
          >
            Login / Register
          </LinkButton>
        </li>
        <li>
          <LinkButton to="about">About</LinkButton>
        </li>
      </ul>

      <Modal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        title="Your Account"
      >
        <LoginForm />
      </Modal>
    </nav>
  );
}

export default MainNav;
