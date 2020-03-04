import React from 'react';
import Card from './Card';
// import { robots } from './robots';


const CardList = ({ robots }) => {
    // This is a component that
    const cardArray = robots.map((user, i) => {
        return (
            <Card
                key={robots[i].id}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            />
        );
    })

    return (
        <div>
            <div className='ba bw2 bg-lightest-blue shadow2'>
                <h1>CardList</h1>
            </div>
            {cardArray}
        </div>
    )
}
export default CardList;
