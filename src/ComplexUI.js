//import React, {useState} from 'react';
/* eslint-disable */
const ComplexUI = function({text}){

    return (
        <section>
            <h1>{text}</h1>
            <button onClick={() => fetchData()}>click me to get error</button>
        </section>
    )
}

export default ComplexUI