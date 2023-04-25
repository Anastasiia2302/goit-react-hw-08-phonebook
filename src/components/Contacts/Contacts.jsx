import { BtnDel, Item, List, Name } from 'components/PhoneBook.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getContacts, getStatusFilter } from 'redux/contacts/selectors';


export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  const filterContacts  = () => {
   
   return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      
  };
 
  return (
    <>
     <List>
        {filterContacts().map(({ id, name, phone }) => {
          return (
            
            <Item key={id}>
              <Name>{name}</Name>
              <Name>{phone}</Name>
              <BtnDel
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </BtnDel>
            </Item>
          );
        })}
      </List>
    </>
  );
}