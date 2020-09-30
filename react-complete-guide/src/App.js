import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Steph', age: 28 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: e.target.value, age: 29 },
        { name: 'Steph', age: 26 }
      ]
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
   // persons.filter(person => person.index !== personIndex)
   persons.splice(personIndex, 1);
   this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}

        </div>
      );
    }

    return (
      <div className="App">
        <h1>hi</h1>
        <p>this is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;