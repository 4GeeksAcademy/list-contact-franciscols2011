const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contactList: [],
    },
    actions: {
      getContactList: async () => {
        const store = getStore();
        const response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/franciscols2011"
        );
        const data = await response.json();
        setStore({ contactList: data });
      },
      addContact: async (full_name, email, phone, address) => {
        const store = getStore();
        const response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              full_name: full_name,
              email: email,
              agenda_slug: "franciscols2011",
              address: address,
              phone: phone,
            }),
          }
        );
        if (response.status == 201) {
          getActions().getContactList();
        }
      },
      updateContact: async (full_name, email, phone, address, contactId) => {
        const store = getStore();
        const response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/" + contactId,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              full_name: full_name,
              email: email,
              agenda_slug: "franciscols2011",
              address: address,
              phone: phone,
            }),
          }
        );
        const data = await response.json();
      },
      deleteContact: async (contactId) => {
        const store = getStore();
        const response = await fetch(
          "https://playground.4geeks.com/apis/fake/contact/" + contactId,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setStore({
          contactList: store.contactList.filter(
            (contact) => contact.id !== contactId
          ),
        });
      },
    },
  };
};

export default getState;
