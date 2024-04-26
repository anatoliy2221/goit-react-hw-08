import { useDispatch } from "react-redux"
import DocumentTitle from "../../components/DocumentTitle"
import ContactList from "../../components/contactList/ContactList"
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import SearchBox from "../../components/searchBox/SearchBox";


const ContactPage = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  })

  return (
    <div>
       <ContactForm />
      <SearchBox />
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactList />
    </div>
  )
}

export default ContactPage