import React from 'react';
import './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends React.Component
{
    render()
    {   
   let Ingredient = null;
    
    switch(this.props.type)
    {
    
        case('bread-bottom'):
                             Ingredient= <div className='BreadBottom'> </div>;
                             break;
        case('bread-top'):
                              
                          Ingredient=(<div className='BreadTop'>
                                     <div className='Seeds1'></div>
                                      <div className='Seeds2'></div>
                              </div>
                                     );
                                      break;
            
            case('meat'):
                         Ingredient=<div className='Meat'></div>
                                     break;
            case('cheese'):
                         Ingredient=<div className='Cheese'></div>
                                     break;
            case('salad'):
                         Ingredient=<div className='Salad'></div>
                                     break;
            case('bacon'):
                         Ingredient=<div className='Bacon'></div>
                                     break;
        default:
            Ingredient=null;
            
        
        
        
        
    }
    return Ingredient;
        
    }
}


BurgerIngredient.propTypes={
    type:PropTypes.string.isRequired
}
    
    
    
    

export default  BurgerIngredient;