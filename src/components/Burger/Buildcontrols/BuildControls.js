import React from 'react';
import './BuildControls.css';
import BuildControl from './Buildcontrol/BuildControl';
const controls= [
    
    {label:'salad', type:'salad'},
    {label:'cheese', type:'cheese'},
    {label:'meat', type:'meat'},
    {label:'bacon', type:'bacon'}
   
    
    
    
];

const BuildControls =(props)=>
(
    <div className='BuildControls'>
    <p>current price<strong> {props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl=>(
     <BuildControl key={ctrl.label} label={ctrl.label} 
        added={()=>props.ingredientAdded(ctrl.type)}
         removed={()=>props.ingredientRemoved(ctrl.type)} 
     disabled={props.disabled[ctrl.type]}/>))}
     
     <button className='Button' disabled={!props.purchasable}> ORDER NOW</button>
    </div>

);

export default BuildControls;