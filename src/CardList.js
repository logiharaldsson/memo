import React from 'react';
import Card from './Card';
import { robots } from './robots';


const CardList = ({ id, name, email, number }) => {
    // This is a component that
    const cardArray = robots.map((user, i) => {
        return (
            <Card
            key={id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            />
        );
    })

    return (
        <div>
            <div className='ba bw2 bg-light-red shadow2'>
                <h1> {`CardList #${number}`} </h1>
            </div>
            {cardArray}
        </div>
    )
}
export default CardList;
