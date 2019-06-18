import React, { Component } from 'react';
import './Messages.css';
import axios from 'axios';

class Messages extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      nameError: '',
      emailError: '',
      messageError: '',
      nameValid: false,
      emailValid: false,
      messageValid: false,
    };
  };

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  };
  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  };
  handleMessageChange = (event) => {
    this.setState({message: event.target.value})
  };

  // Standard Error Check Functions.
  errorCheckStringNullEmpty = (string) => {
    if (string === null || string === '') {
      return true
    } else {
      return false
    }
  };
  errorCheckStringNormalCharacters = (string) => {
    if (!string.match(/^[A-Za-z0-9]+(?:[_][A-Za-z0-9]+)*$/)) {
      return true
    } else {
      return false
    }
  };
  errorCheckEmail = (email) => {
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
      return true
    } else {
      return false
    }
  };

  // State Check Functions.
  checkName = () => {
    let newName = this.state.name;
    // Error if Name is empty.
    if (this.errorCheckStringNullEmpty(newName)) {
      this.setState({
        nameError: 'Name cannot be empty.',
        nameValid: false
      })
    }
    // Error if Name has illegal characters.
    else if (this.errorCheckStringNormalCharacters(newName)) {
      this.setState({
        nameError: 'Name may only contain letters, numbers & underscores.',
        nameValid: false
      })
    }
    // Validate that Name is good to use.
    else {
      this.setState({
        nameError: null,
        nameValid: true
      });
    };
  };

  checkEmail = () => {
    let newEmail = this.state.email;
    // Error if Email is empty.
    if (this.errorCheckStringNullEmpty(newEmail)) {
      this.setState({
        emailError: 'Email cannot be empty.',
        emailValid: false
      })
    }
    // Error if Email has illegal characters.
    else if (this.errorCheckEmail(newEmail)) {
      this.setState({
        emailError: "Improper Email.",
        emailValid: false
      })
    }
    // Validate that Email is good to use.
    else {
      this.setState({
        emailError: null,
        emailValid: true
      });
    };
  };

  // State Check Functions.
  checkMessage = () => {
    let newMessage = this.state.message;
    // Error if Message is empty.
    if (this.errorCheckStringNullEmpty(newMessage)) {
      this.setState({
        messageError: 'Message cannot be empty.',
        messageValid: false
      })
    }
    // Validate that Message is good to use.
    else {
      this.setState({
        messageError: null,
        messageValid: true
      });
    };
  };

  handleSubmit = async (event) => {
    console.log('Enter handleSubmit')
    event.preventDefault()
    await this.checkName();
    await this.checkEmail();
    await this.checkMessage();
    await this.checkIfValid();
  };

  checkIfValid = () => {
    if (this.state.nameValid &&
        this.state.emailValid &&
        this.state.messageValid
      ) {
      this.sendQuestion();
    }
  }

  sendQuestion = () => {
    console.log('Enter sendQuestion')
    axios.post(`/api/messages/email`, null, {
      params: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    })
    .catch(err => {
      console.warn(err);
    })
    .then(res => {
      this.setState({
        name: '',
        email: '',
        message: '',
        nameError: '',
        emailError: '',
        messageError: '',
        nameValid: false,
        emailValid: false,
        messageValid: false,
      });
    });
  }

  render() {
    let nameTitleDisplay;
    if (this.state.nameError === '') { // If nameError is empty
      nameTitleDisplay = (
        <label className="footMessageInputItem">
          <span className="footMessageInputItem" style={{color: "red"}}>
          </span>
        </label>
      )
    } else { // If nameError is NOT empty
      nameTitleDisplay = (
        <label className="footMessageInputItem">
          <span className="footMessageInputItem" style={{color: "red"}}>
            {this.state.nameError}
          </span>
        </label>
      )
    }

    let emailTitleDisplay;
    if (this.state.emailError === '') { // If emailError is empty
      emailTitleDisplay = (
        <label className="footMessageInputItem">
          <span className="footMessageInputItem" style={{color: "red"}}>
          </span>
        </label>
      )
    } else { // If emailError is NOT empty
      emailTitleDisplay = (
        <label className="footMessageInputItem">
          <span className="footMessageInputItem" style={{color: "red"}}>
            {this.state.emailError}
          </span>
        </label>
      )
    }

    let messageTitleDisplay;
    if (this.state.messageError === '') { // If messageError is empty
      messageTitleDisplay = (
        <label className="footMessageInputItem">
          <span className="footMessageInputItem" style={{color: "red"}}>
          </span>
        </label>
      )
    } else { // If messageError is NOT empty
      messageTitleDisplay = (
        <label className="footMessageInputItem">
          <span className="footMessageInputItem" style={{color: "red"}}>
            {this.state.messageError}
          </span>
        </label>
      )
    }


    return (
    <div id="footMessageContainer">
      <div id="footMessageTitleContainer">
        <h3 className="footMessageTitle">Have a Question we didn't cover?</h3>
        <h3 className="footMessageTitle">Let us know!</h3>
      </div>
      <form id="footMessageFormContainer" onSubmit={this.handleSubmit}>

        <div id="footMessageNameContainer" className="footMessageInputContainer">
          <label className="footMessageInputItem"> Name: </label>
          {nameTitleDisplay}
          <input
            className="footMessageInputItem footMessageInputBox"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange} />
        </div>

        <div id="footMessageEmailContainer" className="footMessageInputContainer">
          <label className="footMessageInputItem"> Email: </label>
          {emailTitleDisplay}
          <input
            className="footMessageInputItem footMessageInputBox"
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange} />
        </div>

        <div id="footMessageTextContainer" className="footMessageInputContainer">
          <label className="footMessageInputItem"> Message: </label>
          {messageTitleDisplay}
          <textarea
            className="footMessageInputItem footMessageInputBox footMessageTextareaBox"
            type="text"
            value={this.state.message}
            onChange={this.handleMessageChange} />
        </div>

        <div className="footMessageSubmitButtonContainer">
          <input type="submit" value="Submit" className="footMessageSubmitButton" />
        </div>

      </form>
    </div>
    );
  }
};

export default Messages;
