import React, { Component } from "react";

class TwitterMessage extends Component {
  constructor(props) {
    super();
    this.state = {
      maxChars: props.maxChars,
      message: ''
    };
  }

  handleChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value,
      maxChars: this.state.maxChars - 1
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <p>Characters left: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
