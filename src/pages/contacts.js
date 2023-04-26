import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Phonebook from 'components/Phonebook/Phonebook';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import ContactList from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { Container } from 'components/PhoneBook.styled';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  console.log(isLoading)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
      <Phonebook />
      <Filter />
      <ContactList />
      </Container>
     

      
    </>
  );
}
