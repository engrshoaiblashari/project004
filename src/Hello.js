import React from 'react';
import './Hello.css';

function Greeting({firstName}) {
    return <h1 className="bg-blue text-white"> Welcome Dear {firstName}</h1>
}



export default Greeting;