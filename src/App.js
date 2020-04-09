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
     <img src = {image}/>
   </div>
 }

const foodILike = [
  {
      name: "kmichi",
      image: "https://cdn.pixabay.com/photo/2017/06/28/03/58/kimchi-2449656_960_720.jpg "
  },
  {
      name: "pizza",
      image: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg"
  },
  {
      name: "sandwitch",
      image: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_960_720.jpg"
  },
  {
      name: "kakao",
      image: "https://cdn.pixabay.com/photo/2016/06/12/15/03/cupcakes-1452178_960_720.jpg"
  },
  {
      name: "durian",
      image: "https://cdn.pixabay.com/photo/2016/09/27/16/01/chestnut-1698730_960_720.jpg"
  },
  {
      name: "mango",
      image: "https://cdn.pixabay.com/photo/2017/05/31/14/31/mango-2360551_960_720.jpg"
  },
];

function App() {
  return (
    <div> 
      {foodILike.map(dish =>(
        // <Food  fav = {dish} />
        <Food  name ={dish.name} image={dish.image} />
      ))}
    </div>
  );
}

export default App;