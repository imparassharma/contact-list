import React from "react";
import Card from "./card";
import contacts from "./contacts";
import pic1 from "../images/ak.jpg";
import pic2 from "../images/Sk.jpg";
import pic3 from "../images/SRK.jpg";
function Main(){
    return(
        <div className="Main">
        <Card
            name={contacts[0].name}
            img={pic1}
            tel={contacts[0].phone}
            email={contacts[0].email}
        />
        <Card
            name={contacts[1].name}
            img={pic2}
            tel={contacts[1].phone}
            email={contacts[1].email}
        />
        <Card
            name={contacts[2].name}
            img={pic3}
            tel={contacts[2].phone}
            email={contacts[2].email}
        />
        </div>
    )
}

export default Main;