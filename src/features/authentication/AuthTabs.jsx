import Tabs from '../../ui/Tabs';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const tabs = [
  { label: 'Login', element: <LoginForm /> },
  { label: 'Register', element: <RegisterForm /> },
];

function AuthTabs() {
  return <Tabs tabs={tabs} />;
}

export default AuthTabs;
