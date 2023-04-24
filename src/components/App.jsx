import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactList from './Contacts/Contacts';
import { Container, Title } from './PhoneBook.styled';
import { useAuth } from './hooks';
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { refreshUser } from 'redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';




const HomePage = lazy(() => import ('../pages/home'));
const RegisterPage = lazy(() => import('../pages/register'))
const LoginPage = lazy(() => import('../pages/login '));
const ContactsPage = lazy(() => import('../pages/contacts '));

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return (
    isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (

      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
         <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
         <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
    )
//     <Container>
//       <Title>Phonebook</Title>
//       <Phonebook />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <Title>Contacts</Title>
//       <Filter />
//       <ContactList />
//     </Container>
 );
 };
