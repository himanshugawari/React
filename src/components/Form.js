import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comments: '',
      topic: 'react',
    };
  }

  hadleUsernameChange = (e) => {
    this.setState(
      {
        username: e.target.value,
      },
      () => console.log(this.state.username)
    );
  };

  handleCommentsChange = (e) => {
    this.setState(
      {
        comments: e.target.value,
      },
      () => console.log(this.state.comments)
    );
  };

  handleTopicChange = (e) => {
    this.setState(
      {
        topic: e.target.value,
      },
      () => console.log(this.state.topic)
    );
  };

  handleSubmit = (e) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form action='' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor=''>Username</label>
            <input
              type='text'
              value={this.state.username}
              onChange={this.hadleUsernameChange}
              name=''
              id=''
            />
          </div>
          <div>
            <label htmlFor=''>Comments</label>
            <textarea
              value={this.state.comments}
              onChange={this.handleCommentsChange}
              name=''
              id=''
              cols='30'
              rows='10'
            ></textarea>
          </div>
          <div>
            <label htmlFor=''>Topic</label>
            <select
              value={this.state.topic}
              onChange={this.handleTopicChange}
              name=''
              id=''
            >
              <option value='react'>React</option>
              <option value='angular'>Angular</option>
              <option value='vue'>Vue</option>
            </select>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
