import React from 'react';

/* function Food({fav}){
  console.log(fav);
  return <div>
    <h1> I Like {fav.name}</h1>
    <img src = {fav.image}/>
  </div> 
  }
  */
 function Food({name,image}){
   return <div>
     <h1> this is {name}</h1>
     <img src = {image} alt={name}/>
   </div>
 }

const foodILike = [
  {
      id:1,
      name: "kmichi",
      image: "https://cdn.pixabay.com/photo/2017/06/28/03/58/kimchi-2449656_960_720.jpg "
  },
  {
      id:2,
      name: "pizza",
      image: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg"
  },
  {
      id:3,
      name: "sandwitch",
      image: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_960_720.jpg"
  },
  {
      id:4,
      name: "kakao",
      image: "https://cdn.pixabay.com/photo/2016/06/12/15/03/cupcakes-1452178_960_720.jpg"
  },
  {
      id:5,
      name: "durian",
      image: "https://cdn.pixabay.com/photo/2016/09/27/16/01/chestnut-1698730_960_720.jpg"
  },
  {
      id:6,
      name: "mango",
      image: "https://cdn.pixabay.com/photo/2017/05/31/14/31/mango-2360551_960_720.jpg"
  },
];
function renderFood(dish){
  console.log(dish);
  return <Food key={dish.id} name = {dish.name} image ={dish.image}/>
  //key는 리액트 내부를 위해서 있는것이다
}

function App() {
  return (
    <div> 
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;