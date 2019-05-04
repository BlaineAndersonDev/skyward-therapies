# CRAE + Axios (*Guide #3*)
  * **Create-React-App + Axios: A Complete CRUD App Using Simple But Powerful HTTP Requests**
  * [Live Site Example](https://crae-003-axios.herokuapp.com/)
  * This guide was built in April 2019 by [Blaine Anderson](https://github.com/BlaineAndersonDev).
  * *This Guide is the __3rd__ in a series. Please make sure you're using the App previously built in these guides:*
    * Guide 1: [crae-heroku](https://github.com/BlaineAndersonDev/crae-001-heroku)
    * Guide 2: [crae-nav-foot](https://github.com/BlaineAndersonDev/crae-002-nav-foot)
  <!-- * Blaine Anderson's [Portfolio](http://www.blaineandersondev.com/) -->

  | Technology | Description | CRAE + Heroku | CRAE + Nav + Foot | CRAE + Axios | CRAE + PostgreSQL | CRAE + Dotenv | CRAE + Cloudinary | CRAE + Auth0 |
  | --- | --- | --- | --- | --- | --- | --- | --- | --- |
  | --- | --- | [Github](https://github.com/BlaineAndersonDev/crae-001-heroku) | [Github](https://github.com/BlaineAndersonDev/crae-002-nav-foot) | [Github](https://github.com/BlaineAndersonDev/crae-003-axios.git) | Github | Github | Github | Github |
  | --- | --- | [Live Example](https://crae-001-heroku.herokuapp.com/) | [Live Example](https://crae-002-nav-foot.herokuapp.com/) | [Live Example](https://crae-003-axios.herokuapp.com/) | Live Example | Live Example | Live Example | Live Example |
  | [Homebrew](https://brew.sh/) | "The missing package manager for macOS (or Linux)" | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Atom](https://atom.io/) | Coding Text Editor | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Node](https://nodejs.org/en/) | JS Command Line Interface | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Git](https://git-scm.com/) | Project version control | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Yarn](https://github.com/yarnpkg/yarn) | Alternative Package Manager (Replaces NPM) | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [ReactJS](https://reactjs.org/) | Dynamic Front-End View | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Create-React-App](https://github.com/facebook/create-react-app) | "Zero" Configuration ReactJS Setup | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Express](https://expressjs.com/) | Back-End Api Routing | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Nodemon](https://nodemon.io/) | Automatic Server Restart | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [React-Router-Dom](https://github.com/ReactTraining/react-router#readme) | Front-End 'Router' | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Babel 7](https://babeljs.io/) | ES6 Conversion to ES5 for Browser Compatibly | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [HerokuCLI](https://devcenter.heroku.com/articles/heroku-cli) | Allows you to create & manage Heroku Apps via terminal | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Axios](https://github.com/axios/axios) | Powerful HTTP requests | | | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [PostgreSQL](https://www.postgresql.org/) | SQL Database | | | | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Knex](https://knexjs.org/) | SQL Query Builder | | | | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Dotenv](https://github.com/motdotla/dotenv#readme) | Allows Use of Environment Variable | | | | | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Cloudinary](https://cloudinary.com/) | Third party cloud image storage | | | | | | :white_check_mark: | :white_check_mark: |
  | [Auth0](https://auth0.com/) | Secure sessions & user information | | | | | | | :white_check_mark: |

# CRAE + Axios
  * Upon finishing this guide, you'll have a fully functional CRUD App (Create-Read-Update-Delete).
  * Forewarning: We will be adding in each type of CRUD functionality a single piece at a time. This means we will be revisiting the same files multiple times. Make sure to double check what file to add code, and where exactly to add the code. It is not recommended to skip any steps!
  * **Step 1:** Setup Router(s) & Re-Setup GET (Read)
  * **Step 2:** Setup POST (Create)
  * **Step 3:** Setup PUT (Update)
  * **Step 4:** Setup DELETE (Delete)
  * **Step 5:** Celebration!

## **Step 1:** Setup Router(s) & Assorted Updates
### Updating server.js:
  * Right off, let's make some changes to our server.js file (We're going to mess with a number of files, so hold tight!)
  * Navigate on over to our *Server* directory and open server.js. Then overwrite the entire file with:
  ```
  // https://expressjs.com/
  import express from 'express';
  // Path allows our Server to find build files stored in our frontend.
  // https://nodejs.org/api/path.html
  import path from 'path';

  // We create our "App" using express.
  const app = express();
  // Allows the Server to take requests on the given `port`. When no port is provided, it will default to 3001.
  const port = process.env.PORT || 3001;

  // This line tells our app to use files in the Client's 'build' folder when rendering static pages (production pages).
  app.use(express.static(path.join(__dirname, 'client/build')));

  // This tells the app to find all routes under '/api/messages' in the file 'messageController.js' in the new 'controllers' directory.
  app.use('/api/messages', require('./controllers/messageController.js'));

  // This is a catchall route to prevent the user from dealing with errors from visiting routes that do not exist. It sends a 404 (Not Found) Status as well as a message.
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

  // Prompt text on termial view to show API is ready to go.
  app.listen(port);
  console.log(`Server listening on ${port}`);

  // Exports the `Express App` to be used elsewhere in the project.
  module.exports = app;
  ```
  * You may have noticed some changes in this file, most notably the removal of our 'helloWorld' array and the addition of the line: `app.use('/api/messages', require('./controllers/messageController.js'));`.
  * This line (as noted in the comments) tells our App to get all routes for '/api/messages' from a file called 'messageController.js'. Let's make that now!

### Creating (Routing) Controllers:
  * Please keep in mind this is my method for keeping everything straight within my own Apps and is in no way the best way to do it.
    * *Note: In many CRUD Apps all the API calls are held in files within the 'controllers' directory. While Node & Express do not require you do this in any specific way, it's always a good idea to keep things simple for yourself in the future as well as any other developer who touches your code.*
  * Navigate on over to our *Server* directory and create our new 'controllers' directory:
    * `mkdir controllers`
  * Navigate into the new 'controllers' directory:
    * `cd controllers`
  * Then create our 'messageController.js' file to maintain all of our API routes:
    * `touch messageController.js`
  * Now let's open it up and paste in the following code:
    * `atom messageController.js`
  ```
  import express from 'express';
  // This 'router' is created and maintained by express. It will contain all of our routes listed below in a single, easily accessible object.
  const router = require('express').Router();

  // The object we will be manipulating (instead of using a DB).
  const helloWorld = [
    {id: 1, message: 'Hello World!'},
    {id: 2, message: 'This is pretty cool.'},
    {id: 3, message: 'You got this working!'},
    {id: 4, message: 'Amazing job!'}
  ]

  router.get('/', async (req, res) => {
    console.log(' >>> Entered Route GET(Read) `/api/messages/`')
    // Set 'readResults' as the object 'helloWorld'.
    const readResults = helloWorld
    // We return 'readResults' in JSON to the 'Message.js'.
    res.json(readResults)
  });

  // Here we export the 'router', which contains all of our routes listed, to our server.js file for use.
  module.exports = router
  ```

### Implementing Axios:
  * Now that we have completed the current backend updates, let's take a look at the frontend.
  * Navigate on over to our *Client* directory and lets install Axios:
    * `yarn add axios`
  * Now navigate a bit deeper into our *Client/src/app/pages/message* directory.
  * Open our Message.js file and lets overwrite the code:
  ```
  import React, { Component } from 'react';
  import './Message.css';
  import axios from 'axios';

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
  ```
  * Here we are beginning to implement the async/await functionality the ES6 provides. The important information to you is that it's a promise based function that will wait until each call is completed before moving on.
    * *Note: While focus on async/await is outside the scope of this tutorial, you can read more about async/await [here](https://javascript.info/async-await).*
  * Our changes:
    * We changed changed our componentDidMount into an async/await function and setup an automatic call to our API to update our message state.
    * We changed the name for our state reset button from 'removeMessages' to 'removeMessagesFromState'.
    * We changed from the native 'Fetch' to our new 'Axios' HTTP request package.
  * These changes are fundamental, but the only 'visual' change you'll see when loading the app is when you navigate to 'Messages'. They should now load automatically.

### **_>>> Step 1: Check your progress <<<_**
  * Let go ahead and fire up our App and make sure it functions like normal.
  * Navigate on over to our *Server* directory and fire up the App:
    * `yarn dev`
  * Your 'Messsages' should load automatically when you visit 'http://localhost:3000/message'.



## **Step 2:** Setup POST (Create)
  * Now that we have established our previous code using Axios, our new Router & our new Controller, let's look into getting our CRUD App realized by setting up our POST (Create) route.
### Updating messageController.js:
  * Navigate on over to our *Server/controllers* directory, open messageController.js & overwrite the code with:
  ```
  import express from 'express';
  // This 'router' is created and maintained by express. It will contain all of our routes listed below in a single, easily accessible object.
  const router = require('express').Router();

  // The object we will be manipulating (instead of using a DB).
  const helloWorld = [
    {id: 1, message: 'Hello World!'},
    {id: 2, message: 'This is pretty cool.'},
    {id: 3, message: 'You got this working!'},
    {id: 4, message: 'Amazing job!'}
  ]

  router.get('/', async (req, res) => {
    console.log(' >>> Entered Route GET(Read) `/api/messages/`')
    // Set 'readResults' as the object 'helloWorld'.
    const readResults = helloWorld
    // We return 'readResults' in JSON to the 'Message.js'.
    res.json(readResults)
  });

  router.post('/create', async (req, res) => {
    console.log(' >>> Entered Route POST(Create) `/api/messages/create`')

    // First we want to get all the id's from the objects in 'helloWorld' array in order to make a new object to add to it.
    let listOfIds = [];
    helloWorld.map(i => listOfIds.push(i.id))

    // Now we want to make our 'id' 1 highers than the highest number in the array.
    // (Note: We dont care if we reuse numbers since the App won't remember anything upon restart anyway).
    const currentHighestNumber = Math.max(...listOfIds)

    // Now that we have the currentHighestNumber & our message, we can create an Object.
    const createResults = {id: (currentHighestNumber + 1), message: req.query.message }

    // Here we push the new object into the 'helloWorld' array.
    helloWorld.push(createResults)

    // Currently, we only want to return a HTTP StatusCode & a message as the messageDisplay list will automatically be updated by the frontend.
    res.status(200).send('Message Created.');
  });

  // Here we export the 'router', which contains all of our routes listed, to our server.js file for use.
  module.exports = router
  ```
  * This adds a new API route under `/api/messages/create`. Make sure to check the comments!

### Updating Message.js:
  * Navigate to the *Client/src/app/pages/message* directory, open Message.js & overwrite the code:
  ```
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
  ```
  * This imports a new Component called 'CreateMessage' (Which hasn't been created yet) & adds it into the flow.

### Create the CreateMessage Component:
  * Now let's make that Component.
  * Navigate to the *Client/src/app/pages/message* directory & create CreateMessage.js:
    * `touch CreateMessage.js`
  * Then create CreateMessage.css in the same directory:
    * `touch CreateMessage.css`
  * Open CreateMessage.js and paste in the following code:
  ```
  import React, { Component } from 'react';
  import './CreateMessage.css';
  import axios from 'axios';

  class CreateMessage extends Component {
    constructor(props){
      super(props);
      this.state = {
        newMessage: ''
      };
    }

    // Prevent Message Creation if any field is empty.
    handleEmptyFields = async (event) => {
      // 'event.preventDefault()' Stops the page from reloading on every change to the message.
      event.preventDefault()
      if (!this.state.newMessage) { // State "newMessage" is empty
        alert("The Field 'Message' is empty! Cannot create Message.")
      } else { // All fields hold values
        await this.handleSubmit()
      }
    };

    handleMessageChange = async (event) => {
      await this.setState({newMessage: event.target.value})
    }

    handleSubmit = async (event) => {
      await this.handleCreateMessage(this.state.newMessage)
    }

    // Axios call to API to create the new Message in our backend 'helloWorld' object.
    handleCreateMessage = (message) => {
      axios.post(`/api/messages/create`, null, {
        params: {
          message: message
        }
      })
      .catch(err => {
        console.warn(err);
      })
      .then(res => {
        // Change state to blank for additional messages.
        this.setState({
          newMessage: ''
        })
        // Refresh messageDisplay.
        this.props.getMessages();
      });
    }

    render() {
      return (
        <div id="createMessageContainer">
          <form className="formFieldContainer" onSubmit={this.handleEmptyFields}>
            <div className="formField formTitle"> New Message: </div>
            <textarea className="formField formTextarea" type="textarea" value={this.state.newMessage} onChange={this.handleMessageChange} />
            <div className="formField">
              <input className="formButton" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      );
    }
  }

  export default CreateMessage;
  ```
  * Open CreateMessage.css and paste in the following styles:
  ```
  #createMessageContainer {
    height: auto;
    width: 100%;
  }
  .formFieldContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .formField {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
  }
  .formTitle{
    font-size: 1.5em;
    border-bottom: var(--dev-borders) 1px solid;
  }
  .formTextarea{
    font-size: 1em;
  }
  .formButton{
    font-size: 1em;
    text-decoration: none;
    color: var(--dev-text);
    background: var(--dev-background);
    border: var(--dev-background) 1px solid;
    padding: 7px;
    magin: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.25s linear;
  }
  .formButton:hover{
    background: var(--dev-highlight);
    color: var(--dev-highlight-text);
    border: var(--dev-borders) 1px solid;
  }
  ```

### **_>>> Step 2: Check your progress <<<_**
  * Now that you've added this new component, you should be able to add new messages & update the Dom (site) dynamically! Let's try it:
  * Navigate to the *Server* directory start up the Development App:
    * `yarn dev`
  * You should see a small addition below the messages once they have been pulled from the API (which should have been done automatically):
  ![3-001](client/public/images/3-001.png?raw=true)
  * And if you add a message here and click submit, you should see the the new addition appear instantly!
  ![3-002](client/public/images/3-002.png?raw=true)

## **Step 3:** Setup PUT (Update)
  * Congratulations! You're halfway to a full CRUD App!
  * In this step, we're going to restructure our Message.js to allow each 'Message' to have it's own Component (plus some other stuff)!

### Restructuring Message.js & .css:
  * Navigate to the *Client/src/app/pages/message* directory & overwrite Message.js with the following code:
  ```
  import React, { Component } from 'react';
  import './Message.css';
  import axios from 'axios';
  import IndividualMessage from './IndividualMessage.js';
  import CreateMessage from './CreateMessage.js';

  class Message extends Component {
    constructor(props){
      super(props);
      this.state = {
        messages: [],
      };
    };

    // Async/Await Function: Runs upon Component load. It runs our 'getMessages' function to display all the current messages.
    async componentDidMount() {
      try {
        this.timer = setTimeout(() => {}, 1000);
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
            <div className="messageTextContainer">
              {this.state.messages.map((message, index) =>
                <IndividualMessage
                  key={message.id}
                  message={message}
                  getMessages={this.getMessages}
                />
              )}
            </div>
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
  ```
  * Update Message.css as well:
  ```
  #messageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .messageDisplay {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    max-width: 1000px;
  }
  .messageButton{
    flex: 1;
    font-size: 2em;
    text-decoration: none;
    color: var(--dev-text);
    background: var(--dev-background);
    border: var(--dev-background) 2px solid;
    padding: 20px;
    magin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.25s linear;
  }
  .messageButton:hover{
    background: var(--dev-highlight);
    color: var(--dev-highlight-text);
    border: var(--dev-borders) 2px solid;
  }
  .messageHeader{
    flex: 1;
    font-size: 4em;
    margin: 30px;
    border-bottom: var(--dev-borders) 3px solid;
  }
  .messageText{
    margin: 8px;
    font-size: 2em;
    list-style-type: none;
  }
  .messageTextContainer{
    width: 70%;
    margin-bottom: 50px;
  }
  ```
  * These changes will break our App, but only until we add the next files!

### Create IndividualMessage.js & .css:
  * Navigate to the *Client/src/app/pages/message* directory & create IndividualMessage.js & IndividualMessage.css:
    * `touch IndividualMessage.js`
    * `touch IndividualMessage.css`
  * Paste in the following Code to IndividualMessage.js:
  ```
  import React, { Component } from 'react';
  import EditMessage from './EditMessage.js';
  import './IndividualMessage.css';
  import axios from 'axios';

  class IndividualMessage extends Component {
    constructor(props){
      super(props);
      this.state = {
        toggleEditMenu: false
      };
    }

    onEditMenuClick = () => {
      this.setState({toggleEditMenu: true})
    }

    handleCancelEditMessage = () => {
      this.setState({toggleEditMenu: false})
    }

    handleUpdateMessage = (messageId, messageText) => {
      axios.put(`/api/messages/update/${messageId}`, null, {
        params: {
          messageText: messageText
        }
      })
      .catch(err => {
        console.warn(err);
      })
      .then(res => {
        this.setState({toggleEditMenu: false})
        this.props.getMessages();
      });
    }

    render() {
      let editButtonDisplay = null;
      if (this.state.toggleEditMenu) { // If this.state.toggleEditMenu = true
        editButtonDisplay = (
          <button onClick={this.onEditMenuClick} className="editMessageButton">Edit</button>
        );
      } else {  // If this.state.toggleEditMenu = false
        editButtonDisplay = (
          <button onClick={this.onEditMenuClick} className="editMessageButton">Edit</button>
        );
      }

      let editDisplay = null;
      if (this.state.toggleEditMenu) { // If this.state.toggleEditMenu = true
        editDisplay = (
          <EditMessage
            key={this.props.message.id}
            message={this.props.message}
            handleUpdateMessage={this.handleUpdateMessage}
            getMessages={this.props.getMessages}
          />
        )
      } else {  // If this.state.toggleEditMenu = false
        editDisplay = (
          <div></div>
        );
      }


      return (
        <div className="individualMessageContainer">

          <div className="messageDisplayWrapper">
            <div className="idContainer">
              <p className="individualMessageId">{this.props.message.id}</p>
            </div>

            <div className="messageContainer">
              <p className="individualMessageMessage">{this.props.message.message}</p>
            </div>

            <div className="buttonContainer">
              <p className="individualMessageEdit">{editButtonDisplay}</p>
            </div>
          </div>

          <div className="messageEditWrapper">
            {editDisplay}
          </div>

        </div>
      );
    }
  }

  export default IndividualMessage;
  ```
  * Paste in the following Code to IndividualMessage.css:
  ```
  .individualMessageContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    border: 1px var(--dev-borders) solid;
    box-shadow: 1px 1px 1px var(--dev-borders);
    margin: 10px;
  }
    .messageDisplayWrapper{
      flex: 1 0 0;
      display: flex;
      flex-direction: row nowrap;
      justify-content: center;
      align-items: center;
      min-width: 100%;
    }
      .idContainer{
        display: flex;
        flex-direction: row nowrap;
        padding: 10px;
        margin: 10px;
      }
      .individualMessageId {
      }

      .messageContainer {
        display: flex;
        flex-direction: row nowrap;
        justify-content: center;
        align-items: center;
        font-size: 1em;
        width: 100%;
        padding: 10px;
        margin: 10px;
      }
      .individualMessageMessage {
      }

      .buttonContainer{
        display: flex;
        flex-direction: row nowrap;
      }
      .individualMessageEdit {
        padding: 5px;
        margin: 5px;
      }
      .editMessageButton{
        font-size: 1em;
        text-decoration: none;
        color: var(--dev-text);
        background: var(--dev-background);
        border: var(--dev-background) 1px solid;
        padding: 5px;
        magin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.25s linear;
      }
      .editMessageButton:hover{
        background: var(--dev-highlight);
        color: var(--dev-highlight-text);
        border: var(--dev-borders) 1px solid;
      }

    .messageEditWrapper {
      width: 100%;
    }
  ```
  * Now that our restructuring is done, we can add the EditMessage Component!

### Create EditMessage.js & .css:
  * Navigate to the *Client/src/app/pages/message* directory & create EditMessage.js & EditMessage.css:
    * `touch EditMessage.js`
    * `touch EditMessage.css`
  * Paste in the following Code to EditMessage.js:
  ```
  import React, { Component } from 'react';
  import './EditMessage.css';
  import axios from 'axios';

  class EditMessage extends Component {
    constructor(props){
      super(props);
      this.state = {
        editedMessage: ''
      };
    }

    componentDidMount() {
      this.setState({editedMessage: this.props.message.message})
    }

    handleMessageChange = (event) => {
      this.setState({editedMessage: event.target.value})
    }

    // Prevent Message creation if any field is empty.
    handleEmptyFields = (event) => {
      event.preventDefault()
      if (!this.state.editedMessage) { // State "editedMessage" is empty
        alert("The Field 'Message' is empty! Cannot create Message.")
      }
      else { // All fields hold values
        this.handleSubmit()
      }
    }

    handleSubmit = (event) => {
      this.props.handleUpdateMessage(this.props.message.id, this.state.editedMessage)
    }

    handleCancel = (event) => {
      event.preventDefault();
      this.props.handleCancelEditMessage();
    }

    render() {
      return (
        <div id="editMessageContainer">
          <form className="formFieldEditContainer" onSubmit={this.handleEmptyFields}>
            <div className="formFieldEdit formEditTitle"> Edit Message: </div>
            <input className="formFieldEdit formEditTextarea" type="text" value={this.state.editedMessage} onChange={this.handleMessageChange} />
            <div className="formFieldEdit">
              <input className="formEditButton" type="submit" value="Submit" />
              <button onClick={this.handleCancelEditMessage} className="cancelEditButton">Cancel</button>
            </div>
          </form>
        </div>
      );
    }
  }

  export default EditMessage;
  ```
  * Paste in the following Code to EditMessage.css:
  ```
  #editMessageContainer {
    height: auto;
    width: 100%;
  }
  .formFieldEditContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .formFieldEdit {
    flex: 1;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: row nowrap;
    justify-content: center;
    align-items: center;
  }
  .formEditTitle{
    font-size: 1em;
  }
  .formEditTextarea{
    flex-grow: 3;
    font-size: 1em;
  }
  .formEditButton, .cancelEditButton{
    flex: 1;
    font-size: 1em;
    text-decoration: none;
    color: var(--dev-text);
    background: var(--dev-background);
    border: var(--dev-background) 1px solid;
    padding: 7px;
    margin: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.25s linear;
  }
  .formEditButton:hover, .cancelEditButton:hover {
    background: var(--dev-highlight);
    color: var(--dev-highlight-text);
    border: var(--dev-borders) 1px solid;
  }

  ```

### Updating MessageController.js:
  * Now that we have the *Edit* option available on each of our Messages, let's make it work!
  * Navigate to our *server/controllers* directory & open MessageController.js.
  * Pop this new route right in under our *Create* route but above the `module.export = router` line:
  ```
  router.put('/update/:id', async (req, res) => {
    console.log(' >>> Entered Route PUT(Update) `/api/messages/update/:id`')

    // First let's identify the exact 'id' so we know what message to update.
    // We also need to convert it to an integer (because its currently a string).
    const messageId = Number(req.params.id);

    // Let's also identify the 'message' so we can apply it later.
    const messageText = req.query.messageText;

    // Now we will iterate over the 'helloWorld' array until we find the provided 'messageId'.
    for (let i in helloWorld) {
      if (helloWorld[i].id == messageId) {
        helloWorld[i]['message'] = messageText
      }
    }

    // Currently, we only want to return a HTTP StatusCode & a message as the messageDisplay list will automatically be updated by the frontend.
    res.status(200).send('Message Updated.');
  });
  ```
  * This route takes a *Param* or *Parameter* in the call (Where it says `:id`). The *Param* allows us to find the exact Message to alter using the `messageText` we sent in our *Query*.
  * *Make sure you read over all the comments in our new Route so you understand how it functions!*

### **_>>> Step 3: Check your progress <<<_**
  * So now the App should function as per normal, but it should also have a snazzy new look!
  ![3-003](client/public/images/3-003.png?raw=true)
  * Those 'Edit' buttons will open up a new dialogue that's hidden from view, which will allow us (as the user) to change messages on the fly!
  ![3-004](client/public/images/3-004.png?raw=true)
  * Give it a try, you should be able to edit any of the Messages (even new ones!) and the changes will be kept in our 'helloWorld' Object in our MessageController.js! (At least until the App is restarted.)

## **Step 4:** Setup DELETE (Delete)
  * Finally, the last major step for our CRUD App!
  * Since we've already restructured everything we only need to add a new .js, .css & route in our MessageController.js, as well as a few edge case error catchers scattered in a couple places!

### Create DeleteMessage.js & .css:
  * First, navigate to the *Client/src/app/pages/message* directory & create DeleteMessage.js & DeleteMessage.css:
    * `touch DeleteMessage.js`
    * `touch DeleteMessage.css`
  * Paste in the following Code to DeleteMessage.js:
  ```
  import React, { Component } from 'react';
  import './DeleteMessage.css';

  class DeleteMessage extends Component {
    // Normally you would create a contstructor here like in our other components, but since this Component does not store any information and only uses Props, it is unnecessary.

    handleConfirm = () => {
      this.props.handleDeleteMessage(this.props.message)
    }

    handleDeny = (event) => {
      this.props.handleDenyDeleteMessage()
    }

    render() {
      return (
        <div id="deleteMessageContainer">
          <h3 className="deleteTitle">Are you sure you wish to delete this joke?</h3>
          <div className="deleteButtonWrapper">
            <button onClick={this.handleConfirm} className="deleteButton">Yes</button>
            <button onClick={this.handleDeny} className="deleteButton">No</button>
          </div>
        </div>
      );
    }
  }

  export default DeleteMessage;
  ```
  * Paste in the following Code to DeleteMessage.css:
  ```
  #deleteMessageContainer {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .deleteTitle {
    font-size: 1em;
    padding: 5px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    border-top: 1px black solid;
  }
  .deleteButtonWrapper {
    display: flex;
    flex-direction: row nowrap;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  .deleteButton {
    flex: 1;
    font-size: 1em;
    text-decoration: none;
    color: var(--dev-text);
    background: var(--dev-background);
    border: var(--dev-background) 1px solid;
    padding: 7px;
    margin: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.25s linear;
  }
  .deleteButton:hover {
    background: var(--dev-highlight);
    color: var(--dev-highlight-text);
    border: var(--dev-borders) 1px solid;
  }
  ```

### Another update to IndividualMessage.js & .css:
  * While we're only updating a couple small functions I added comments to sort out the different sets of functions.
  * Navigate to the *Client/src/app/pages/message* directory
  * Overwrite IndividualMessage.js with this code:
  ```
  import React, { Component } from 'react';
  import EditMessage from './EditMessage.js';
  import DeleteMessage from './DeleteMessage.js';
  import './IndividualMessage.css';
  import axios from 'axios';

  class IndividualMessage extends Component {
    constructor(props){
      super(props);
      this.state = {
        toggleEditMenu: false,
        toggleDeleteMenu: false
      };
    }

  // ===========================
  // Edit Functions ============
  // ===========================
    onEditMenuClick = () => {
      this.setState({toggleEditMenu: true})
    }

    handleCancelEditMessage = () => {
      this.setState({toggleEditMenu: false})
    }

    handleUpdateMessage = (messageId, messageText) => {
      axios.put(`/api/messages/update/${messageId}`, null, {
        params: {
          messageText: messageText
        }
      })
      .catch(err => {
        console.warn(err);
      })
      .then(res => {
        this.setState({toggleEditMenu: false})
        this.props.getMessages();
      });
    }

  // ===========================
  // Delete Functions ==========
  // ===========================
    onDeleteMenuClick = () => {
      this.setState({toggleDeleteMenu: true})
    }

    handleDenyDeleteMessage = () => {
      this.setState({toggleDeleteMenu: false})
    }

    handleDeleteMessage = (message) => {
      const id = message.id;
      axios.delete(`/api/messages/delete/${id}`, null)
      .catch(err => {
        console.warn(err);
      })
      .then(res => {
        this.setState({toggleDeleteMenu: false})
        this.props.getMessages();
      });
    }

    render() {
      // ========== Render Edit Displays ==========
      let editButtonDisplay = null;
      if (this.state.toggleEditMenu) { // If this.state.toggleEditMenu = true
        editButtonDisplay = (
          <div></div>
        );
      } else {  // If this.state.toggleEditMenu = false
        editButtonDisplay = (
          <button onClick={this.onEditMenuClick} className="alterMessageButton">Edit</button>
        );
      }

      let editDisplay = null;
      if (this.state.toggleEditMenu) { // If this.state.toggleEditMenu = true
        editDisplay = (
          <EditMessage
            key={this.props.message.id}
            message={this.props.message}
            handleUpdateMessage={this.handleUpdateMessage}
            getMessages={this.props.getMessages}
          />
        )
      } else {  // If this.state.toggleEditMenu = false
        editDisplay = (
          <div></div>
        );
      }

      // ========== Render Delete Displays ==========
      let deleteButtonDisplay = null;
      if (this.state.toggleDeleteMenu) { // If this.state.toggleDeleteMenu = true
        deleteButtonDisplay = (
          <div></div>
        );
      } else {  // If this.state.toggleDeleteMenu = false
        deleteButtonDisplay = (
          <button onClick={this.onDeleteMenuClick} className="alterMessageButton">Delete</button>
        );
      }

      let deleteDisplay = null;
      if (this.state.toggleDeleteMenu) { // If this.state.toggleDeleteMenu = true
        deleteDisplay = (
          <DeleteMessage
            key={this.props.message.id}
            message={this.props.message}
            handleDeleteMessage={this.handleDeleteMessage}
            handleDenyDeleteMessage={this.handleDenyDeleteMessage}
          />
        )
      } else {  // If this.state.toggleDeleteMenu = false
        deleteDisplay = (
          <div></div>
        );
      }

      return (
        <div className="individualMessageContainer">

          <div className="messageDisplayWrapper">
            <div className="idContainer">
              <p className="individualMessageId">{this.props.message.id}</p>
            </div>

            <div className="messageContainer">
              <p className="individualMessageMessage">{this.props.message.message}</p>
            </div>

            <div className="buttonContainer">
              <p className="individualMessageAlter">{editButtonDisplay}</p>
              <p className="individualMessageAlter">{deleteButtonDisplay}</p>
            </div>
          </div>

          <div className="messageEditWrapper">
            {editDisplay}
          </div>

          <div className="messageDeleteWrapper">
            {deleteDisplay}
          </div>

        </div>
      );
    }
  }

  export default IndividualMessage;
  ```
  * Let's make sure to update the styles in IndividualMessage.css as well:
  ```
  .individualMessageContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    border: 1px var(--dev-borders) solid;
    box-shadow: 1px 1px 1px var(--dev-borders);
    margin: 10px;
  }
    .messageDisplayWrapper{
      flex: 1 0 0;
      display: flex;
      flex-direction: row nowrap;
      justify-content: center;
      align-items: center;
      min-width: 100%;
    }
      .idContainer{
        display: flex;
        flex-direction: row nowrap;
        padding: 10px;
        margin: 10px;
      }
      .individualMessageId {
      }

      .messageContainer {
        display: flex;
        flex-direction: row nowrap;
        justify-content: center;
        align-items: center;
        font-size: 1em;
        width: 100%;
        padding: 10px;
        margin: 10px;
      }
      .individualMessageMessage {
      }

      .buttonContainer{
        display: flex;
        flex-direction: row nowrap;
      }
      .individualMessageAlter {
        padding: 5px;
        margin: 5px;
      }
      .alterMessageButton{
        font-size: 1em;
        text-decoration: none;
        color: var(--dev-text);
        background: var(--dev-background);
        border: var(--dev-background) 1px solid;
        padding: 5px;
        magin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.25s linear;
      }
      .alterMessageButton:hover{
        background: var(--dev-highlight);
        color: var(--dev-highlight-text);
        border: var(--dev-borders) 1px solid;
      }

    .messageEditWrapper {
      width: 100%;
    }

    .messageDeleteWrapper {
      width: 100%;
    }
  ```

### Update MessageController.js:
  * We also need to add in our Delete route, but since we're adding the delete route, we will also need to change our create route a bit to catch an edge case (What if we delete ALL messages?!?).
  * Navigate over to *Server/controllers* and open our messageController.js.
  * Overwrite it with the following code:
  ```
  import express from 'express';
  const router = require('express').Router();

  // The object we will be manipulating (instead of using a DB).
  const helloWorld = [
    {id: 1, message: 'Hello World!'},
    {id: 2, message: 'This is pretty cool.'},
    {id: 3, message: 'You got this working!'},
    {id: 4, message: 'Amazing job!'}
  ]

  router.get('/', async (req, res) => {
    console.log(' >>> Entered Route GET(Read) `/api/messages/`')
    // Set 'readResults' as the object 'helloWorld'.
    const readResults = helloWorld
    // We return 'readResults' in JSON to the 'Message.js'.
    res.json(readResults)
  });

  router.post('/create', async (req, res) => {
    console.log(' >>> Entered Route POST(Create) `/api/messages/create`')

    // First we want to get all the id's from the objects in 'helloWorld' array in order to make a new object to add to it.
    let listOfIds = [];
    helloWorld.map(i => listOfIds.push(i.id))

    // Now that 'Delete' is in play we need to make sure we check the edge case "If the user deleted ALL messages".
    let currentHighestNumber;
    if (listOfIds.length <= 0) {
      currentHighestNumber = 0
    } else {
      // Now we make our 'id' 1 highers than the highest number in the array.
      // (Note: We dont care if we reuse numbers since the App won't remember anything upon restart anyway).
      currentHighestNumber = Math.max(...listOfIds)
    }

    // Now that we have the currentHighestNumber & our message, we can create an Object.
    const createResults = {id: (currentHighestNumber + 1), message: req.query.message }

    // Here we push the new object into the 'helloWorld' array.
    helloWorld.push(createResults)

    // Currently, we only want to return a HTTP StatusCode & a message as the messageDisplay list will automatically be updated by the frontend.
    res.status(200).send('Message Created.');
  });

  router.put('/update/:id', async (req, res) => {
    console.log(' >>> Entered Route PUT(Update) `/api/messages/update/:id`')

    // First let's identify the exact 'id' so we know what message to update.
    // We also need to convert it to an integer (because its currently a string).
    const messageId = Number(req.params.id);

    // Let's also identify the 'message' so we can apply it later.
    const messageText = req.query.messageText;

    // Now we will iterate over the 'helloWorld' array until we find the provided 'messageId'.
    for (let i in helloWorld) {
      if (helloWorld[i].id == messageId) {
        helloWorld[i]['message'] = messageText
      }
    }

    // Currently, we only want to return a HTTP StatusCode & a message as the messageDisplay list will automatically be updated by the frontend.
    res.status(200).send('Message Updated.');
  });

  router.delete('/delete/:id', async (req, res) => {
    console.log(' >>> Entered Route DELETE(Delete) `/api/messages/delete`')

    // First let's identify the exact 'id' so we know what message to delete.
    // We also need to convert it to an integer (because its currently a string).
    const messageId = Number(req.params.id);

    // Now we will iterate over the 'helloWorld' array until we find the provided 'messageId'.
    for (let i in helloWorld) {
      if (helloWorld[i].id == messageId) {
        // When we find the correct 'id', we will then remove it.
        helloWorld.splice(i, 1);
      }
    }

    // Currently, we only want to return a HTTP StatusCode & a message as the messageDisplay list will automatically be updated by the frontend.
    res.status(200).send('Message Deleted.');
  });
  ```

### Update Message.js:
  * Our last update will be to Message.js. We need to add a way to create messages even if we have none.
  * Navigate to the *Client/src/app/pages/message* directory & open Message.js.
  * Overwrite it with the following code: (It adds 1 whole line lol)
  ```
  import React, { Component } from 'react';
  import './Message.css';
  import axios from 'axios';
  import IndividualMessage from './IndividualMessage.js';
  import CreateMessage from './CreateMessage.js';

  class Message extends Component {
    constructor(props){
      super(props);
      this.state = {
        messages: [],
      };
    };

    // Async/Await Function: Runs upon Component load. It runs our 'getMessages' function to display all the current messages.
    async componentDidMount() {
      try {
        this.timer = setTimeout(() => {}, 1000);
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
            <div className="messageTextContainer">
              {this.state.messages.map((message, index) =>
                <IndividualMessage
                  key={message.id}
                  message={message}
                  getMessages={this.getMessages}
                />
              )}
            </div>
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
            <CreateMessage getMessages={this.getMessages}/>
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
  ```

### **_>>> Step 4: Check your progress <<<_**
  * With that all being implemented, you should be able to use all of our CRUD App's features!
  * Boot up your App and try it all out!
  * It should look similar to this:
  ![3-005](client/public/images/3-005.png?raw=true)


## **Step 5:** Celebration :clap:
  * **===> You've Competed This Tutorial! <====**
  * You've reached a CRUD level Application! Excellent work!
  * Go get Coffee or Tea as a reward! If you don't drink those then... Water? Do people still drink water?

## Credits!
  * A compiled list of Github Markdown safe Emoji's (Copy and Paste even!) :smile:
    * [rxaviers gist](https://gist.github.com/rxaviers/7360908)

## :floppy_disk: ---===> Continue Learning? <===--- :floppy_disk:
  * If you're interested in continuing to make this App even better, why not check out the next Guide in the series?
    * *The next guide focuses on adding Database functionality to your CRUD App by incorporating a [PostgreSQL](https://www.postgresql.org/) Database & [Knex](https://knexjs.org/) a SQL Query Builder into your App.*
    * [CRAE+PostgreSQL]( )

  <!--
  | Guide | Description |
  | --- | --- |
  | [CRAE+Heroku](https://github.com/BlaineAndersonDev/crae-001-heroku) | A detailed guide to building a basic [Create-React-App](https://github.com/facebook/create-react-app) + [Express](https://expressjs.com/) App and deploy it to [Heroku](https://www.heroku.com/). The First Guide In The Series. |
  | CRAE+Nav+Foot | This guide focuses on creating a persistent Top level Navigation bar & a footer that stays grounded. ([Example](________)) |
  | CRAE+Axios | A guide aimed to implement the [Axios](https://github.com/axios/axios) routing library for simple but powerful HTTP requests. |
  | CRAE+PostgreSQL | A continuation guide to incorporate a fully fleshed [PostgreSQL](https://www.postgresql.org/) Database & [Knex](https://knexjs.org/) SQL Query Builder into your App. |
  | CRAE+Dotenv | A guide to implementing [Dotenv](https://github.com/motdotla/dotenv#readme) into your App. |
  | CRAE+Cloudinary | This guide allows you to store images in a third party app called [Cloudinary](https://cloudinary.com/). |
  | CRAE+Auth0 | A guide to help implement secure sessions, logins and user information retrieval using [Auth0](https://auth0.com/). |
  -->
