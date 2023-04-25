import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Phonebook from 'components/Phonebook/Phonebook';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  console.log(isLoading)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      
      <Phonebook />
      <div>{isLoading && 'Request in progress...'}</div>
      <Phonebook />
    </>
  );
}