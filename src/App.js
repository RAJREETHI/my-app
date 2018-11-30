import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
//import BurgerIngredient from './components/Burger/BurgerIngredients/BurgerIngredient';
class App extends Component {
   
    
  render() {
    return (
      <div>
          <Layout>
        <BurgerBuilder>
        
        </BurgerBuilder>
         </Layout> 
      </div>
    );
  }
}

export default App;
