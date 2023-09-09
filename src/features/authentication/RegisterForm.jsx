import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';

function RegisterForm() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          id="name"
          placeholder="Enter Name"
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
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || 'Passwords do not match',
          })}
        />
      </FormRow>
      <FormRow label="Phone Number" error={errors?.phone?.message}>
        <Input
          id="phone"
          placeholder="Enter Phone Number"
          {...register('phone', {
            required: 'This field is required',
            pattern: {
              value:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              message: 'Phone number is not valid',
            },
          })}
        />
      </FormRow>
      <Button>Submit</Button>
    </Form>
  );
}

export default RegisterForm;
