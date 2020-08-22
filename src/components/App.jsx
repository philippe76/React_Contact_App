import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function addContact(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map(addContact)}
    </div>
  );
}

export default App;
