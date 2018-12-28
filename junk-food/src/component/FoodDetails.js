import React from 'react';
import '../App.css'
import Item from './Items'
import SingleItem from './SingleItem'

const foodDetails = (props) => (
    <div>
    {
        props.singleItem ? <SingleItem type={props.singleItem} /> : 
        <div>
        {
            props.junk.map((type, index) => {
               return <Item key={index} type={type}/>
            })
        }
        </div>
    }
    </div>
);

export default foodDetails;