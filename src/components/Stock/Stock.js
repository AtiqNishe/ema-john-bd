import React, { useState } from 'react';

const Stock = (props) => {
    let st = props.s;
    
   
   
    
    console.log(props);
    return (
        <div>
            <h1>Stock{st}</h1>
        </div>
    );
};

export default Stock;