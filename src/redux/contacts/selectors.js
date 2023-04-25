export const selectContacts = state => state.contacts.items;

export const selectLoading = state => state.contacts;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.filters.status;
