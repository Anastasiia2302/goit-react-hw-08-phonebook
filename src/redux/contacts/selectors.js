export const selectContacts = state => state.contacts.items;
console.log(selectContacts)

export const selectLoading = state => state;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.filter.status;
