import React from 'react';
// import './App.css';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'

// Just importet infof !!!

function App() {
    return (
        <div className="tc ">
            <h1>Welcome to RoboFriends </h1>
            <SearchBox />
            <CardList robots={robots} number={1}/>
            <CardList robots={robots} number={2}/>
        </div>
    );
}

export default App;
