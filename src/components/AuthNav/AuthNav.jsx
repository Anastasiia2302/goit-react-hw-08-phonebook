import { NavLink } from 'react-router-dom';
import { Auth } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Auth>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Auth>
  );
};
