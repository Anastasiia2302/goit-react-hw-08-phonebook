import { useAuth } from 'components/hooks';
import { Btn } from 'components/PhoneBook.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </div>
  );
};
