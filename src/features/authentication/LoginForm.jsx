import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useLogin } from './useLogin';

function LoginForm({ closeModal }) {
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
        onSuccess: () => closeModal(),
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email">
        <Input
          type="email"
          id="email"
          placeholder="Enter Email"
          autoComplete="username"
          disabled={isLoading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          type="password"
          id="password"
          placeholder="Password"
          autoComplete="current-password"
          disabled={isLoading}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <Button disabled={!email || !password || isLoading}>Submit</Button>
    </Form>
  );
}

export default LoginForm;
