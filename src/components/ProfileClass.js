import React from 'react';

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Child - Constructor' + this.props.name);
  }
  componentDidMount() {
    console.log('Child - ComponentsDidMount' + this.props.name);
  }
  render() {
    console.log('Child - Render' + this.props.name);
    return (
      <div>
        <h2>Profile Class Component</h2>
        <h2>Name : {this.props.name}</h2>
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count
        </button>
      </div>
    );
  }
}

export default ProfileClass;
