import React, { Component } from 'react';

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    // new approach
    this.inputRef = React.createRef();
    // old approach -> callback ref
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // new approach
    this.inputRef.current.focus();
    console.log(this.inputRef);

    // old approach -> callback ref
    // if (this.cbRef) {
    //   this.cbRef.focus();
    // }
  }

  // new approach
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        {/* new approach */}
        {/* focus on text field */}
        <input ref={this.inputRef} type='text' name='' id='' />
        {/* sends data back using refs */}
        <button onClick={this.clickHandler} type='submit'>
          Click
        </button>

        {/* old approach -> callback ref */}
        {/* focus on text field */}
        <input ref={this.setCbRef} type='text' name='' id='' />
        {/* sends data back using refs */}
        <button onClick={this.clickHandler} type='submit'>
          Click
        </button>
      </div>
    );
  }
}

export default RefsDemo;
