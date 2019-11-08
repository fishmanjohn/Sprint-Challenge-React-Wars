import React, {useState, useEffect}from 'react';
import axios from "axios";
import './App.css';
import CardGrid from "./components/cardGrid"
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [media, setMedia] = useState([{}]);
  const [error, setError] = useState();
  useEffect(() =>{

  axios.get('https://corsanywhere.herokuapp.com/https://lambda-swapi.herokuapp.com/api/people/')
    
    .then(response =>{
      console.log(response)
      console.log(response.data.results)
      response.data.results.forEach(item => {
        setMedia(item)
       })
    })
    .catch( err =>{
      console.log('sorry no Starwars', err)
      setError(err)
    })
  
},[error]);

//console.log(media)

// media.forEach(item => {
//  console.log(item)
// })
//console.log(person)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
     <CardGrid media={media}  />
    </div>
  );
}

export default App;
