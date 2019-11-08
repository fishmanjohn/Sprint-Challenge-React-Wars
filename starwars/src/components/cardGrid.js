import React from 'react'
import styled from 'styled-components';
import Card from './card'
const FlexCloumn = styled.div`
width:100%;
margin:100px 0%;
display:flex;
flex-wrap: wrap;
align-items:center;
justify-content:space-evenly;
`;

 const CardGrid = (props) =>{
 console.log(props.media)
 
       
     return(
       <div>
           <FlexCloumn>
          {props.media.map( (item, index) => {
              return <Card person = {item} key={index}/>
          })}
          
          </FlexCloumn>
          
        </div>
     )

};
export default CardGrid;

