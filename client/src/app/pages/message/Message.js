import React, { Component } from 'react';
import './Message.css';
import axios from 'axios';
import CreateMessage from './CreateMessage.js';

class Message extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
  };

  // Async/Await Function: Runs upon Component load. It runs our 'getMessages' function to display all the current messages.
  async componentDidMount() {
    try {
      await this.getMessages();
    } catch (error) {
      console.log(error)
    }
  };

  // Async/Await Function: Removes all messages from state.
  removeMessagesFromState = async () => {
    await this.setState({
      messages: []
    })
  }

  // Async/Await Function: Retreives all 'messages' from our API.
  getMessages = async () => {
    await axios.get(`/api/messages`)
    .catch(error => {
      console.warn(error);
    })
    .then(response => {
      this.setState({
        messages: response.data
      })
    })
  };

  render() {
    // During the render, we check if this.state.messages has any objects.
    let messageDisplay;
    if (this.state.messages.length >= 1) {
      // If yes, we display those objects as well as:
        // The 'removeMessagesFromState' option to remove objects from state,
        // The '<CreateMessage />' Component to allow users to create their own messages,
      messageDisplay = (
        <div className="messageDisplay">
          <h1 className="messageHeader">{this.state.messages.length} Messages!</h1>
          <ul className="messageTextContainer">
            {this.state.messages.map((message, index) =>
              <li key={message.id} className="messageText">
                {message.message}
              </li>
            )}
          </ul>
          {/* Here we display the 'CreateMessage' Component, and send our 'getMessages' function as a prop. */}
          <CreateMessage getMessages={this.getMessages}/>
          <button
            className="messageButton"
            onClick={this.removeMessagesFromState}>
            Remove Messages From State?
          </button>
        </div>
      )
    } else {
      // If no, then we display the option to 'getMessages' from the API.
      messageDisplay = (
        <div className="messageDisplay">
          <h1 className="messageHeader">No messages :(</h1>
          <button
            className="messageButton"
            onClick={this.getMessages}>
            Get Messages From API?
          </button>
        </div>
      )
    };

    return (
      <div className="messageContainer">
        {messageDisplay}
      </div>
    );
  }
}

export default Message;
