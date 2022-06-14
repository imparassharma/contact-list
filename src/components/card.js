import React from "react";
function Card(props){
    return(
    <div className="card">
        <div className="top-section">
            <h2>{props.name}</h2>
        </div>
        <div className="bottom-section">
            <div className="left-section">
                <h3>{props.tel}</h3>
                <h3>{props.email}</h3>
            </div>
            <div className="right-section">
                <img src={props.img} alt="avatar"/>
            </div>
        </div>
    </div>
    )
}

export default Card;