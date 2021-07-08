import React from 'react';

function Card(props) {
  return (
   <div className="card">
        <img className= "image" src={props.emoji} alt="Emoj" />
        <h2 className= "title"> {props.name}</h2>
        <p className="content"> {props.meaning} </p>
    </div>
  )};

  export default Card;
