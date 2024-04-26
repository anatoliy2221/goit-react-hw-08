import { createSelector } from "@reduxjs/toolkit";
import { selectContact } from "../contacts/selectors";

export const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector([selectContact, selectNameFilter],
    (contacts, filter ) => {
return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    ); 
});