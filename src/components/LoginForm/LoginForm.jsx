import {
  Btn,
  Container,
  FormReg,
  InputReg,
  Label,
} from 'components/PhoneBook.styled';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
            Email
           <InputReg type="email" name="email" />
          </Label>
          <Label>
            Password
            <InputReg type="password" name="password" />
          </Label>
          <Btn type="submit">Log In</Btn>
        </form>
      </FormReg>
    </Container>
  );
};
