import React from 'react';
import Auxs from '../../hoc/Auxs.js';
import  './Layout.css';

const layout = (props)=>
(
    <Auxs>
        <div>  toolbar,side drawer,back</div>
    
    <main className='Content'>
    {props.children}
    </main>
    </Auxs>
    
    
);

export default layout;
