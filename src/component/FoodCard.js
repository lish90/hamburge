import React from 'react';

function FoodCard(props){
    return(
    <div>
    <h1>{props.header}</h1>
    <h2>{props.title}</h2>
    <img src= {props.image} alt= ""/>
    <p>{props.children}</p>
    </div>
    );
}
export default FoodCard;

