import React from 'react'
import styled from 'styled-components';
import Card from './card'

 const CardGrid = (props) =>{
 console.log(props.media)
const person = props.media 
       
     return(
       <div>
          <Card person ={person}/>
          <Card person ={person}/>
          <Card person ={person}/>
          <Card person ={person}/>
          
        </div>
     )

};
export default CardGrid;

