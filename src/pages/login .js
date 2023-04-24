import { LoginForm } from 'components/AppBar/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

export default function login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}