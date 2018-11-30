import React from 'react';
import Auxs from '../../../hoc/Auxs.js';

const OrderSummery=(props)=>
{
   const ingredientsummery= Object.keys(props.ingredients )
   .map(igkey=>{
       return <li><span>{igkey}</span>:{props.ingredients[igkey]}</li>
   });
return(
    
    <Auxs>
    <h3>your orders </h3>
    <p> A delicious burger with these ingregients </p>
    <ul>
    {ingredientsummery}
    
    </ul>
    </Auxs>
    
    
    );
    };
export default OrderSummery ;
