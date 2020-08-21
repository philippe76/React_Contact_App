import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map((item) => (
        <Card
          name={item.name}
          img={item.imgURL}
          phone={item.phone}
          email={item.email}
        />
      ))}
    </div>
  );
}

export default App;
