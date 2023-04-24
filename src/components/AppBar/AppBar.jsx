import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header } from './AppBar.styled';
import { useAuth } from 'components/hooks';
import { Container } from 'components/PhoneBook.styled';



export const AppBar = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <Header>
        <Container>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Container>
      </Header>
    );
  };