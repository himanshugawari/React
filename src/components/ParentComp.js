import React, { PureComponent } from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

// class ParentComp extends Component {
class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Himanshu',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Himanshu',
      });
    }, 2000);
  }

  render() {
    console.log('************parent component render');
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
