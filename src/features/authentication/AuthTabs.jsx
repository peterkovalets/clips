import Tabs from '../../ui/Tabs';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthTabs({ closeModal }) {
  const tabs = [
    { label: 'Login', element: <LoginForm closeModal={closeModal} /> },
    { label: 'Register', element: <RegisterForm closeModal={closeModal} /> },
  ];

  return <Tabs tabs={tabs} />;
}

export default AuthTabs;
