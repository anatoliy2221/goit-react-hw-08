// import "./App.css";
// import ContactForm from "./components/contactForm/ContactForm";
// import SearchBox from "./components/searchBox/SearchBox";
// import ContactList from "./components/contactList/ContactList";
import { useDispatch, useSelector } from "react-redux";

import { Suspense, lazy, useEffect } from "react";

// import Loader from "./components/loader/Loader";
// import { selectError, selectIsLoading } from "./redux/contacts/selectors";
// import { fetchContacts } from "./redux/contacts/operations";
// import LoginForm from "./components/loginForm/LoginForm";
// import RegistrationForm from "./components/registrationForm/RegistrationForm";
import Layout from "./components/layout/Layout";
import { selectIsrefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./components/restrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
const HomePage = lazy(() => import("./pages/homePage/HomePage"))
const RegistrationPage = lazy(() => import("./pages/registrationPage/RegistrationPage"))
const LoginPage = lazy(() => import("./pages/loginPage/LoginPage"))
const ContactPage = lazy(() => import("./pages/contactsPage/ContactPage"))

const App = () => {

const dispatch = useDispatch();
const { isRefreshing } = useSelector(selectIsrefreshing);


// const isLoading = useSelector(selectIsLoading);
// const error = useSelector(selectError);

// useEffect(() => {
//   dispatch(fetchContacts());
// }, [dispatch]);

useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

return isRefreshing ? (
  <b>Refreshing user...</b>
) : (
<Layout>
<Suspense>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/register' element={
      <RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />}/>}/>
      <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />}/>}/>
      <Route path='/contacts' element={<PrivateRoute redirectTo="/login" component={<ContactPage />}/>}/>
    </Routes> 
</Suspense>
</Layout>
  
  );
};

export default App;

{/* <div className="container">
<h1>Phonebook</h1>
<RegistrationForm />
<LoginForm />
<ContactForm  />  
<SearchBox  />
{isLoading && <Loader />}
{error && <b>❌ Something went wrong</b>}
<ContactList  />
</div> */}

