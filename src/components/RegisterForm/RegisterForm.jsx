import {
  Btn,
  Container,
  FormReg,
  InputReg,
  Label,
} from 'components/PhoneBook.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <FormReg>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Label>
            Username
            <InputReg type="text" name="name" />
          </Label>
          <Label>
            Email
            <InputReg type="email" name="email" />
          </Label>
          <Label>
            Password
            <InputReg type="password" name="password" />
          </Label>
          <Btn type="submit">Register</Btn>
        </form>
      </FormReg>
    </Container>
  );
};
