import React from "react";
import Card from "./Card";
import emojipedia from './emojipedia';

function App() {
  return (
    <div>
    <h1>emojipedia </h1>
    {emojipedia.map((props) => {
      return(
      <Card
        key={props.id}
        emoji={props.emoji}
        name={props.name}
        meaning={props.meaning} />
    )}
    )}
    </div>
  );
}
export default App;
