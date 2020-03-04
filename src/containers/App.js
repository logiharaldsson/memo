import React, { Component } from 'react';
// import './App.css';
import CardList from '../components/CardList';
// THis one is to import from a js file, objects such as a list of robots.
// import { robots } from '../components/robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';



class App extends Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return (
            <div className="tc ">
                <h1 className='f1'>Welcome to RoboFriends Homepage </h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;
