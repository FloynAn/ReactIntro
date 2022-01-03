import React from 'react';

const Section = (props) => {
    console.log(props.arr);
    console.log(props.arr1);
    console.log(props.arr2);
    console.log(props.arr3);
    return (
        <div>
            <p style={{height:'330px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '100px',
            fontWeight: 'bold',
            color: 'darkred',}}>
                Let's go boyzzz
            </p>
            <h1 style={{textAlign: 'center'}}>{props.arr} {props.arr1} {props.arr2} {props.arr3}</h1>
        </div>
    );
};

export default Section;