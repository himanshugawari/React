import React, { Component } from 'react';

// Conditional Rendering
class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  // short circuit operator
  render() {
    return this.state.isLoggedIn && <div>Welcom Himanshu</div>;
  }

  // using ternary operator
  //   render() {
  //     return this.state.isLoggedIn ? (
  //       <div>Welcom Himanshu</div>
  //     ) : (
  //       <div>Welcom Guest</div>
  //     );
  //   }

  // using element variable
  //   render() {
  //     let message;
  //     if (this.state.isLoggedIn) {
  //       message = <div>Welcom Himanshu</div>;
  //     } else {
  //       message = <div>Welcom Guest</div>;
  //     }
  //     return <div>{message}</div>;
  //   }

  // using if else
  //   render() {
  //     if (this.state.isLoggedIn) {
  //       return <div>Welcome Himanshu</div>;
  //     } else {
  //       return <div>Welcome Guest</div>;
  //     }
  //   }
}

export default UserGreeting;
