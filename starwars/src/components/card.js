import React from 'react'
import styled from 'styled-components';

const StyledCard = styled.div`
height: 160px;
width: 100%;
background-color: grey;


`


const Card = (props) =>{
       console.log(props.person)
       
    
    return(
           
            <div>
                <StyledCard>
             <h1>Name :{props.person.name}</h1>
            <h2>Height :{props.person.height}</h2>
             <h2>Mass :{props.person.mass}</h2>
             </StyledCard>
        </div>
       
    )
};
export default Card;