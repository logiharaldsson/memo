import React from 'react';
// import './App.css';
import CardList from './CardList';
import { robots } from './robots';

// Just importet infof !!!

function App() {
    return (
        <div className="tc ">
            <CardList robots={robots} number={1}/>
            <CardList robots={robots} number={2}/>
        </div>
    );
}

export default App;
