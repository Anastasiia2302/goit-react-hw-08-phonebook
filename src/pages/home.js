import { Container } from 'components/PhoneBook.styled';

export default function home() {
  return (
    <Container>
      
      <h1>Phonebook</h1>
      <img src={require('../Image/4298345.png')} alt="phone" width='400px' />
    </Container>
    
  );
}
