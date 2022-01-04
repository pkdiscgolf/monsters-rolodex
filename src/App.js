import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list-component.jsx';
import { SearchBox } from './components/search-box/search-box-component.jsx';
// import { render } from '@testing-library/react';

class App extends Component{

  constructor(){
    super();//calls constructor method on component class

    this.state = {
      string: 'Disc Golf',
      monsters: [
        // {
        //   name: 'Frankensteiny',
        //   id: 'asc1'
        // },
        // {
        //   name: 'Dracula',
        //   id: 'asc2'
        // },
        // {
        //   name: 'McClure',
        //   id: 'asc3'
        // }
      ],
      searchField: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  //fetches data from api
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  };

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase()
      .includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
<h1>Rolodex</h1>
      <SearchBox placeholder='search monsters'
       handleChange={this.handleChange}

      />


        <CardList monsters={filteredMonsters}>
        </CardList>

        <header className="App-header">
        
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            { this.state.string }
          </p>
          <button onClick={() => this.setState({ string: 'here' })}>
            Change Text
          </button>

          {/* <button onClick={() => this.setState({ score: score - 1 })}>
            -
          </button>
          <p>
            { this.state.score }
          </p>
          <button onClick={() => this.setState({ score: score + 1 })}>
            +
          </button> */}


        </header>
    </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
          
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

export default App;
