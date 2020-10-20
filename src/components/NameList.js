import React from 'react';
import { Component } from 'react';

import Person from './Person';

class NameList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    const getPersons = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const result = await response.json();
      this.setState(
        {
          persons: result,
        },
        () => console.log(this.state.persons)
      );
    };
    getPersons();
  }

  render() {
    // const names = ['bruce', 'clark', 'diana', 'clark'];
    // const namesList = names.map((name, index) => (
    //   <h2 key={index}>
    //     {index} {name}
    //   </h2>
    // ));
    // return <div>{namesList}</div>;

    const personList = this.state.persons.map((person) => (
      <Person key={person.id} person={person} />
    ));
    return <div>{personList}</div>;
  }
}

export default NameList;
