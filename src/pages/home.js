import { Container } from 'components/PhoneBook.styled';
import 'animate.css';

export default function home() {
  return (
    <Container>
      
      <h1>Phonebook</h1>
      <img src={require('../Image/4298345.png')} alt="phone" width='400px' className='animate__animated animate__pulse animate__delay-2s animate__infinite' />
    </Container>
    
  );
}
