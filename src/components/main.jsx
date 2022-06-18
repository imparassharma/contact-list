import React from "react";
import Card from "./card";
import contacts from "./contacts";

function create_card(contact){
    return(
        <Card
        name={contact.name}
        tel={contact.phone}
        email={contact.email}
        img={contact.img}
        />
    )
}
function Main(){
    return(
        <div className="Main">
            <h1>CONTACT LIST</h1>
            {contacts.map(create_card)}
        </div>
    )
}

export default Main;