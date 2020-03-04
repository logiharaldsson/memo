import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='dib tc pa3 ma2 br3 grow ba bw2 bg-light-green pointer'>
            <img alt='robot' src={`https://robohash.org/${id}?150x150`}/>
            <h2>{name}</h2>
            <h4>{email}</h4>
        </div>
    )
}

export default Card
