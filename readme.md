# CRAE + Heroku
  * **Create-React-App + Express + Deployment to Heroku.**
  * [Live Site Example](https://crae-heroku.herokuapp.com/)
  * This guide was built in April 2019 by [Blaine Anderson](https://github.com/BlaineAndersonDev).
  * This App serves as a starting point with instruction for aspiring developers using the CRAE stack (create-react-app-express) & is prepared upon completion to be deployed to Heroku.
  <!-- * Blaine Anderson's [Portfolio](http://www.blaineandersondev.com/) -->

> This instructional tutorial assumes you have a minimal understanding of Javascript, React JSX, Express Routing & Heroku. If not, then let's try anyway! Coding is all about learning!

  | Technology | Description | CRAE + Heroku | CRAE + Nav + Foot | CRAE + Axios | CRAE + Db | CRAE + Dotenv | CRAE + Cloudinary | CRAE + Auth0 |
  | --- | --- | --- | --- | --- | --- | --- | --- | --- |
  | --- | --- | [Github](https://github.com/BlaineAndersonDev/crae-heroku#crae--heroku) | Github | Github | Github | Github | Github | Github |
  | --- | --- | [Live Example](https://crae-heroku.herokuapp.com/) | Live Example | Live Example | Live Example | Live Example | Live Example | Live Example |
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

# CRAE + Heroku
  * **Step 1:** Basic Installations & Directory Setup.
  * **Step 2:** Upload to Github.
  * **Step 3:** Server (Root Directory) Updates.
  * **Step 4:** Client (Create-React-App) Updates.
  * **Step 5:** Deployment to Heroku.
  * **Step 6:** Celebration.

  > *This tutorial focuses on building a basic CRAE App & deploying it to Heroku. If you are looking for my related tutorials [CRAE + DB](), [CRAE + Dotenv]() or another tutorial please check [here]().*

## **Step 1:** Basic Installations & Directory Setup
### Basic Installations:
  * Before we can begin, make sure you have these technologies installed.
  * We will add additional technologies in our project later as 'Dependencies'.
    * [Homebrew](https://brew.sh/)
      * (See site for installation instructions)
    * [Node](https://nodejs.org/en/)
      * (See site for installation instructions)
    * [Git](https://git-scm.com/)
      * (See site for installation instructions)
    * [Atom](https://atom.io/)
      * *(Or any [coding text editor](https://www.elegantthemes.com/blog/resources/best-code-editors) instead)*
      * (See site for installation instructions)
    * [Yarn](https://github.com/yarnpkg/yarn)
      * *(Or use the Node default CLI [NPM](https://github.com/npm/cli) instead)*
      * `brew install yarn`
    * [Create-React-App](https://github.com/facebook/create-react-app)
      * `yarn global add create-react-app`

### Directory Setup:
  * Organization from the top of a project down is important, so we will be designing our project as simply as possible.
  * During these step-by-step instructions, always double check that your in the correct directory!
  * When we are done, our Project layout should resemble somthing like this example file structure:
    * *Note: Many files from this example structure have been omitted for simplicity.*
  ~~~
  <myproject> (Directory)
    +-- server.js
    +-- package.json
    +-- .gitignore
    +-- .babelrc
    +-- readme.md
    +-- client (Directory)
        +-- package.json
        +-- public (Directory)
        +-- src (Directory)
            +-- index.js
            +-- App.js
  ~~~

  * In your terminal navigate to wherever you would like to begin building your project (Desktop is never a bad spot!)
    * `cd ~/Desktop`
  * Create your Projects Root Directory (Top-Level Directory):
    * `mkdir <Project_Name>`
  * Navigate into your new directory:
    * `cd <Project_Name>`
  * Create a "package.json" for the Root Directory:
    * "-y" just means to accept all default options.
    * `yarn init -y`
  * Create a file called "server":
    * This file will server as your back-end/API later.
    * `touch server.js`
  * Create a file called ".gitignore":
    * This file will tell 'git' what files to save in commits as well as what to send to Heroku.
    * `touch .gitignore`
  * Create a file called ".babelrc":
    * This file will hold the presets for Babel that allow ES5 to ES6 conversions to take place.
    * `touch .babelrc`
  * Make your root directory a git repository:
    * This allows you to control the entire App from your root (or server) directory.
    * This also prevents create-react-app from creating its own git automatically (which is more of a headache than an actual problem).
    * `git init`
  * User create-react-app to create a directory called "client":
    *  create-react-app generates all the required files automatically for your front-end!
    * `create-react-app client`

  * Now that we've laid the groundwork for our Project, we will need to make some changes & add some new files to the "Root" (*server*) & *client* directories.
  * From here on, we will refer to our "Root" directory as our "*Server*".

### **_>>> Step 1: Check your progress <<<_**
  * Now that you've finished, your directories should look similar to this:
  * ![001](client/public/images/001_directory_setup.png?raw=true)


## **Step 2:** Getting your local repository onto Github
  * Since we've got a bit of work done now, we should store it properly... in [Github](https://github.com)!
  * Navigate to your *Server* and lets 'save' everything we've done so far:
    * `git add .`
    * This tells 'git' to 'add' (prepare to save) '.' (everything) you've done in both your *Server* & *Client* directories, minus any specific files or directories in your .gitignore.
  * Now lets 'commit' (save) our code as a version:
    * `git commit -m "<Insert Message Here>"`
    * You should always be adding a commit message with a small summery of what you've done up to this point.
    * I.E. `git commit -m "Initial Commit. Setup File Structure."`
  * The files are now committed (saved) locally as a version. Now we need to setup our remote github repository.
    * In your Browser, navigate to your github and create a new repository:
      * ![008](client/public/images/008.png?raw=true)
    * Give your new repository a good name. You may also add a description if you wish. Leave everything else alone for now.
      * ![009](client/public/images/009.png?raw=true)
    * Now make sure you have 'HTTPS' selected and copy the provided link (Click the nifty copy button on the right).
      * ![010](client/public/images/010.png?raw=true)
    * Head on back to your terminal and navigate to the *Server* directory.
    * Use the following command:
      * `git remote add origin <Link>`
      * I.E. `git remote add origin https://github.com/BlaineAndersonDev/crae-example.git`
      * This links a remote repository to your local one, allowing you to send you code to the cloud with a 'push'.
    * Let's do that push to the cloud now. In terminal, use the command:
      * `git push origin master`
      * This pushes the code to the remote 'origin' that we just setup, and we want our git branch 'master' to be sent up to the cloud.

### **_>>> Step 2: Check your progress <<<_**
  * You should see some flashy code running and once thats completed, go refresh your github repository. You should now see it filled with your code!

## **Step 3:** Server Updates
  * For updates to the *server* we will need to:
    * Install dependencies.
    * Update *package.json*, .*babelrc*, *server.js*.

### Install dependencies:
  * Navigate to your *Server* directory in your terminal
  * Add all our dependencies:
    * `yarn add express @babel/core @babel/cli @babel/node @babel/preset-env`
      * Express:
      * Babel Core:
      * Babel Cli:
      * Babel Node:
      * Babel Preset Env:
  * Then add our single development dependency:
    * `yarn add --dev concurrently`
      * Concurrently:

### Update package.json:
  * Open the *Server*'s package.json with Atom
  * We need to alter the "main" file located towards the top.
    * Change `index.js` to `server.js`.
  * Now we will add scripts (These allow us to start the server from our terminal).
    ```
    "scripts": {
      "dev": "concurrently -n Client,Server -c cyan,magenta \"cd client && PORT=3000 yarn start\" \"PORT=3001 yarn start\"",
      "start": "babel-node server.js",
      "heroku-postbuild": "cd client && yarn && yarn run build"
    }
    ```
    * "dev": Uses concurrently to simultaneously run our Client and Server in a single command. Concurrently also supports naming & coloring our terminal, read more [here](https://github.com/kimmobrunfeldt/concurrently#usage).
    * "start": Once we deploy to Heroku, this command will start our server. (For development, we should be using the "dev" script.)
    * "heroku-postbuild": Prior to our Heroku Dyno being started, this will run our "build" script in our create-react-app. That allows our *server* to display static pages. For more information read [here](_____).
  * At this point, your package.json should look similar to this:
  ```
  {
    "name": "crae-heroku",
    "version": "1.0.0",
    "main": "server.js",
    "license": "MIT",
    "dependencies": {
      "@babel/cli": "^7.4.4",
      "@babel/core": "^7.4.4",
      "@babel/node": "^7.2.2",
      "@babel/preset-env": "^7.4.4",
      "express": "^4.16.4"
    },
    "devDependencies": {
      "concurrently": "^4.1.0"
    },
    "scripts": {
      "dev": "concurrently -n Client,Server -c cyan,magenta \"cd client && PORT=3000 yarn start\" \"PORT=3001 yarn start\"",
      "start": "babel-node server.js",
      "heroku-postbuild": "cd client && yarn && yarn run build"
    }
  }
  ```

### Update .babelrc:
  * Open the *Server*'s .babelrc with Atom
  * Copy & paste in this single object:
  ```
  {
    "presets": ["@babel/preset-env"]
  }
  ```
  * This tells Babel to use a preset of options to alter ES5 to ES6 and should work for almost all your javascript conversion needs. Unless you're extremely needy, in which case read more [here](https://babeljs.io/docs/en/).

### Update .gitignore:
  * Open the *Server*'s .gitignore with Atom
  * Copy & paste in this code:
  ```
  # dependencies
  /node_modules
  /client/node_modules
  /.pnp
  .pnp.js

  # testing
  /coverage

  # production
  /build

  # misc
  .DS_Store
  .env.local
  .env.development.local
  .env.test.local
  .env.production.local

  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*
  ```
  * These selections tell git to 'ignore' anything listed from being committed to Github or Heroku. This is important for security reasons or to hide secret variables when using third-party packages.
  * *While this file is not required for this tutorial, it is conventional to include a .gitigore with all projects being stored on a remote server. I.E. Github.*

### Update server.js:
  * Lastly for server updates, open the *Server*'s server.js with Atom
  * Copy & paste in this code:
  ```
  // Express is what allows our backend to receieve 'HTTP calls' from other sources, specifically our frontend.
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

  // All API endpoints (routes) should begin with '/api'.
  // Loading 'localhost:3001/api/example' will direct you to this '/api/example' route.
  app.get('/api/messages', (req, res) => {
    // Here we create a variable named 'helloWorld' that holds an object.
    const helloWorld = [
      {id: 1, message: 'Hello World!'},
      {id: 2, message: 'This is pretty cool.'},
      {id: 3, message: 'You got this working!'},
      {id: 4, message: 'Amazing job!'}
    ]
    // We return the object in JSON to the calling point (Our browser).
    res.json(helloWorld)
  });

  // Loading 'localhost:3001/api/' will direct you to this root '/api' route.
  app.get('/api', (req, res) => {
    const message = 'This is the root API route!';
    res.json(message)
  });

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
  * Every line in this code has a comment about it for posterity. Make sure to take some time and read over them to understand more about what your doing.
  * Want a file with no comments? Too bad! Remove them manually! :smiling_imp:

### **_>>> Step 3: Check your progress <<<_**
  * Let go ahead and start both our *server* & our *client* using a single command:
  * Navigate to your *Server* directory in your terminal & use:
    * `yarn dev`
  * Checking on our *Client*:
    * This should automatically load your React *client*, which will navigate you to the standardly generated React page, located at [localhost:3000](http://localhost:3000/).
    * ![002](client/public/images/002_react_homepage.png?raw=true)
  * Checking on our *Server*:
    * In your browser, navigate to [localhost:3001/api/messages](http://localhost:3001/api/messages)
    * Here you should see some basic data displayed, like so:
    * ![003](client/public/images/003_server.png?raw=true)
    * Great work! Both your *Server* & *Client* are working perfectly!
  * Make sure you push your code up to Github!
    * Navigate to your *Server* directory in your terminal & use:
    * `git push origin master`


## **Step 4:** Client Updates
  * For updates to the *client* we will need to:
    * Add a proxy.
    * Install dependencies.
    * Update *package.json*, .*index.js*, *App.js*, *App.css*.
    * Remove *serviceWorker.js* & the *Client*'s *.gitignore*'.

### Install dependencies:
  * Navigate to your *Client* directory in your terminal
  * Add our single dependency:
    * `yarn add react-router-dom`
      * React-Router-Dom:

### Add a Proxy to package.json:
  * Open the *Server*'s package.json with Atom
  * Add a single line:
    * `"proxy": "http://localhost:3001"`
  * Having installed our dependency and added our Proxy, your *client*/package.json should look similar to this:
  ```
  {
    "name": "client",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "react": "^16.8.6",
      "react-dom": "^16.8.6",
      "react-router-dom": "^5.0.0",
      "react-scripts": "3.0.0"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "eslintConfig": {
      "extends": "react-app"
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    },
    "proxy": "http://localhost:3001"
  }
  ```


### Update index.js:
  * Open the *Client*'s index.js with Atom
  * Copy & paste in this code:
  ```
  // We import React here in order to use it.
  import React from 'react';
  // This allows us to render and alter content dynamically on the DOM (https://reactjs.org/docs/react-dom.html)
  import { render } from 'react-dom';
  // This allows us to create a front-end 'Router', to allow the user to navigate throughout our components without having to reload the page each time (https://reacttraining.com/react-router/web/api/BrowserRouter)
  import { BrowserRouter } from 'react-router-dom';
  // This imports our actual App in order to display it to our browser.
  import App from './App.js';

  // 'render' is what allows the App to be displayed. It's held inside of a 'Router' (BrowserRouter) so in the future we can implement additional route options. The entire thing is rendered at the element 'id' via HTML.
  render((
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  ), document.getElementById('root'));
  ```
  * All lines have comments for educational purposes. Same as before.

### Update App.js:
  * Open the *Client*'s App.js with Atom
  * Copy & paste in this code:
  ```
  // Import React & 'Component' which allows us to create Components as well as render JSX.
  import React, { Component } from 'react';
  // Import our CSS file for styling.
  import './App.css';

  class App extends Component {
    // Initialize props & state
    constructor(props){
      super(props);
      this.state = {
        messages: []
      };
    };

    // componentDidMount will run immidiately after the page is called, usually prior to a user seeing anything.
    componentDidMount() {
    }

    // getMessages is written in ES6 syntax. It makes a call to our API using 'fetch' and sets the information into state for us to use.
    getMessages = () => {
      // Get the messages from the specified route.
      fetch('/api/messages')
        // Convert the response into JSON.
        .then(res => res.json())
        // Set the (now JSON) response into state to be used later.
        .then(messages => this.setState({ messages }));
    }

    render() {

      return (
        <div className="App">
          {/* Check our state for messages. */}
          {this.state.messages.length ? (
            // If we have messages in state then render them.
            <div>
              <h1>4 Messages!</h1>
              <ul className="messages">
                {this.state.messages.map((message, index) =>
                  <li key={message.id}>
                    {message.message}
                  </li>
                )}
              </ul>
            </div>
          ) : (
            // Otherwise render a button to call our API for messages.
            <div>
              <h1>No messages :(</h1>
              <button
                className="more"
                onClick={this.getMessages}>
                Get Messages From API?
              </button>
            </div>
          )}
        </div>
      );
    }
  }

  export default App;
  ```
  * All lines have comments for educational purposes. Same as before.

### Update App.css (Optional):
  * While this is optional, I don't see why you would skip it :smirk:
  * Open the *Client*'s App.css with Atom
  * Copy & paste in this code:
  ```
  .App {
    text-align: center;
    font-family: "Courier New", monospace;
    width: 100%;
  }

  h1 {
    font-weight: normal;
    font-size: 42px;
  }

  .messages {
    list-style: none;
    padding: 0;
    font-size: 32px;
    margin-bottom: 2em;
  }

  .more {
    font-size: 32px;
    font-family: "Courier New", monospace;
    border: 2px solid #000;
    background-color: #fff;
    padding: 10px 25px;
  }
  .more:hover {
    background-color: #FDD836;
  }
  .more:active {
    background-color: #FFEFA9;
  }
  ```
  * All lines have comments for educational purposes. Same as before.

### Remove serviceWorker.js (Optional):
  * This step is REALLY optional. I've no idea what this does, and most guides seem to just remove it or never use it.
  * Navigate to the *Client* with your terminal
  * Use the following command to remove the file:
    * `rm -rf serviceWorker.js`

### Remove the *Client*'s .gitignore (Optional):
  * We don't need two .gitignore files. This won't hurt to leave in, but just adds clutter.
  * To remove it, navigate to the *Client* with your terminal
  * Use the following command to remove the file:
    * `rm -rf .gitignore`

### **_>>> Step 4: Check your progress <<<_**
  * Let go ahead and start both our *server* & our *client* gain using a single command:
  * Navigate to your *Server* directory in your terminal & use:
    * `yarn dev`
  * Checking on our *Client*:
    * This should automatically load your React *client*, but this time it will load the wonderfully styled page similar to the image below, and will still be located at [localhost:3000](http://localhost:3000/).
    * ![004](client/public/images/004_frontend_no_messages.png?raw=true)
  * Checking on the connection from our *Server* to our *Client*:
    * In your browser, click that giant button that says "Get Messages From API?"
    * You should see the button disappear and the data from the object in our *server* being displayed, like so:
    * ![005](client/public/images/005_frontend_yes_messages.png?raw=true)
    * If thats the case, then EXCELLENT WORK! :exclamation: :cake:
    * That means both your *Server* & *Client* are working perfectly and better yet, communicating properly!
  * Make sure you push your code up to Github!
    * Navigate to your *Server* directory in your terminal & use:
    * `git push origin master`

## **Step 5:** Deployment to Heroku.
  * Now that the base App is working & communicating properly, we can send it on up to Heroku and get it on the real interwebs! :computer:
  * To deploy our App to heroku we will need to:
    * Have Heroku's CLI installed (Command Line Interface).
    * Create a Heroku Dyno.
    * Push our App to the newly created Heroku Dyno.
    * Watch as the App is created remotely with Heroku Logs.
    * Load our awesome App and test it on the internets!

### Installing HerokuCLI
  * There are a number of options for installing the Heroku CLI, though the most common ones would be via an installer (MacOS or Windows) or using Brew (Mac Only).
  * I recommend using the installer, but you can read more about installation options [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).
  * After installing the HerokuCLI you'll need to login via your terminal using it.
  * Logging in is very straightforward and I recommend following the instructions given by Heroku themselves [here](https://devcenter.heroku.com/articles/heroku-cli#getting-started).

### Creating a Heroku Dyno (App)
  * Now that the HerokuCLI is installed, we can use commands for it
  * Navigate to your *Server* directory and use this command:
    * `heroku create <Optional_Dyno_Name>`
    * I.E. `heroku create crae-heroku`

### Pushing our App to Heroku
  * Now that the Heroku Dyno is created, all we need to do is push our App to it
  * Navigate to your *Server* directory and use this command:
    * `git push heroku master`
  * This will send our App to the associated Heroku Dyno.

### Checking on our App's progress with Heroku Logs
  * In another terminal window or tab, navigate to your *Server* directory and use this command:
    * `heroku logs --tail`
  * This will load the current directories heroku logs, which is displayed in real time for you to look over. Usually this is used to find errors, but it's good to watch and see exactly what happens the first few times so you understand it better.

### Understanding how Heroku builds your App
  * When we push our App up, Heroku does a couple things:
    * Heroku checks for the script "heroku-postbuild". Once our App's information is fully pushed up, and Heroku has installed yarn on the remote server (Which it does automatically) it will look for that *specific* script and execute it.
    * In this "heroku-postbuild" script, we tell Heroku to go one directory deeper and install yarn there too. Once thats done we also tell it to run the *client*'s "build" script (Which allows our *server* to display those static files from the 'client/build' directory).
    * This likely sounds quite confusing. Believe me, I understand.
    * All you really need to know is not to change the *Server*'s "start" & "heroku-postbuild" scripts, as well as the *Client*'s "start" or "build" scripts.
    * Lastly, one line **must** stay in server.js, otherwise these scripts won't work properly:
      * `app.use(express.static(path.join(__dirname, 'client/build')));`
    * Basically, Commit and push often so you don't get stuck with an error you can't figure out! :scream:

### **_>>> Step 5: Check your progress <<<_**
  * Once the App is fully loaded on Heroku, you should see something like this in the heroku logs:
  * ![006](client/public/images/006_heroku_logs.png?raw=true)
  * You should now be able to load the webpage where it's located.
    * If your not sure where that is, you can look at the Dyno on Heroku itself & check the settings for that specific Dyno. There will be a link to you page there.
  * Another option is looking in your terminal where you pushed your App to Heroku.
    * There should be the actual link to your live site in the terminal, just copy and paste it out. It would look something like this:
    * ![007](client/public/images/007_heroku_link.png?raw=true)
  * You can find the live version of this app at [https://crae-heroku.herokuapp.com/](https://crae-heroku.herokuapp.com/).

## **Step 6:** Celebration! :clap:
  * **===> You've Competed The App! <====**
  * At this point, you've created a fully functional **CRAE** stack Application **AND** Deployed it to Heroku! Congrats!
  * Now you can begin adding your own content to the current setup if you want.
  * I hope you enjoyed what has been a hell of a journey for me (which really means I did SO MUCH READING)!
  * Also consider checking out some of my other guides if your interested, otherwise I wish you a great day! :wave:

## Credits!
  * Original guides I used to learn (though some are outdated and I had to make due):
    * [Dave Ceddia: Deploy React and Express to Heroku](https://daveceddia.com/deploy-react-express-app-heroku/)
    * [John Contreras: Running Create React App and Express (CRAE) on Heroku](https://originmaster.com/running-create-react-app-and-express-crae-on-heroku-c39a39fe7851)
    * [Ashish Nandan Singh: How to deploy a React app with an Express server on Heroku](https://medium.freecodecamp.org/how-to-deploy-a-react-app-with-an-express-server-on-heroku-32244fe5a250)
  * A compiled list of Github Markdown safe Emoji's (Copy and Paste even!) :smile:
    * [rxaviers gist](https://gist.github.com/rxaviers/7360908)


## :floppy_disk: ---===> Continue Learning? <===--- :floppy_disk:
  * If your interested in continuing to make this App even better, why not check out the next Guide in the series?
    * *The next guide focuses on creating a simplistic, useful & persistant Navigtion Bar, as well as a Footer that actually stays where it should!*
    * [CRAE+Nav+Foot]( )

  <!--
  | Guide | Description |
  | --- | --- |
  | [CRAE+Heroku](https://github.com/BlaineAndersonDev/crae-heroku#crae--heroku) | A detailed guide to building a basic [Create-React-App](https://github.com/facebook/create-react-app) + [Express](https://expressjs.com/) App and deploy it to [Heroku](https://www.heroku.com/). The First Guide In The Series. |
  | CRAE+Nav+Foot | This guide focuses on creating a persistent Top level Navigation bar & a footer that stays grounded. ([Example](________)) |
  | CRAE+Axios | A guide aimed to implement the [Axios](https://github.com/axios/axios) routing library for simple but powerful HTTP requests. |
  | CRAE+DB | A continuation guide to incorporate a fully fleshed [PostgreSQL](https://www.postgresql.org/) Database & [Knex](https://knexjs.org/) SQL Query Builder into your App. |
  | CRAE+Dotenv | A guide to implementing [Dotenv](https://github.com/motdotla/dotenv#readme) into your App. |
  | CRAE+Cloudinary | This guide allows you to store images in a third party app called [Cloudinary](https://cloudinary.com/). |
  | CRAE+Auth0 | A guide to help implement secure sessions, logins and user information retrieval using [Auth0](https://auth0.com/). | -->
