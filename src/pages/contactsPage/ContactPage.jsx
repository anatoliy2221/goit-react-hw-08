import { useEffect } from "react";
import { useDispatch } from "react-redux"
import ContactList from "../../components/contactList/ContactList"
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/contactForm/ContactForm";
import SearchBox from "../../components/searchBox/SearchBox";
import { Container } from "@mui/material";


const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  })

  return (
    <Container maxWidth="sm">
      <ContactForm />
      <SearchBox />
      <ContactList />
    </Container>
  )
}

export default ContactPage