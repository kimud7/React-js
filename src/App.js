import React from 'react';

function Food(props){
  return <h1> I Like {props.fav}</h1>
}

function App() {
  return (
    <div> Hello
      <Food  fav="kimchi"/>
      <Food  fav="pizza"/>
      <Food  fav="sandwitch"/>
      <Food  fav="kakao"/>
      <Food  fav="durian"/>
      <Food  fav="mango"/>
    </div>

  );
}

export default App;
