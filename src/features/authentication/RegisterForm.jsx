import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useRegister } from './useRegister';

function RegisterForm({ closeModal }) {
  const { register: registerAccount, isLoading } = useRegister();
  const { register, handleSubmit, getValues, formState, reset } = useForm({
    mode: 'onTouched',
  });
  const { errors, isValid } = formState;

  function onSubmit(data) {
    registerAccount(
      { ...data, age: Number(data.age) },
      {
        onSettled: () => reset(),
        onSuccess: () => closeModal(),
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          id="name"
          placeholder="Enter Name"
          disabled={isLoading}
          {...register('name', {
            required: 'This field is required',
            minLength: {
              value: 3,
              message: 'Name must have at least 3 characters',
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: 'Name must have only latin characters',
            },
          })}
        />
      </FormRow>
      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          placeholder="Enter Email"
          disabled={isLoading}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Email is not valid',
            },
          })}
        />
      </FormRow>
      <FormRow label="Age" error={errors?.age?.message}>
        <Input
          type="number"
          id="age"
          placeholder="Enter Age"
          disabled={isLoading}
          {...register('age', {
            required: 'This field is required',
            min: {
              value: 13,
              message: 'You should be at least 13 years old',
            },
          })}
        />
      </FormRow>
      <FormRow label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          placeholder="Enter Password"
          disabled={isLoading}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters',
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Confirm Password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="password-confirm"
          placeholder="Confirm Password"
          disabled={isLoading}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || 'Passwords do not match',
          })}
        />
      </FormRow>
      <FormRow label="Phone Number" error={errors?.phoneNumber?.message}>
        <Input
          type="tel"
          id="phone-number"
          placeholder="Enter Phone Number"
          disabled={isLoading}
          {...register('phoneNumber', {
            required: 'This field is required',
            pattern: {
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
              message: 'Phone number is not valid',
            },
          })}
        />
      </FormRow>
      <Button disabled={isLoading || !isValid}>Submit</Button>
    </Form>
  );
}

export default RegisterForm;
