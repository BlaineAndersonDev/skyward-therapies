# CRAE + Heroku
  * ###### Create-React-App + Express + Deployment to Heroku.
  * Skeleton Modeled in April 2019.
  * Author: [Blaine Anderson](https://github.com/BlaineAndersonDev)
  * This App serves as a starting point with instruction for aspiring developers using the CRAE stack (create-react-app-express) & is prepared upon completion to be deployed to Heroku.

> This instructional tutorial assumes you have a minimal understanding of Javascript, React JSX, Express Routing & Heroku. If not, then let's try anyway! Coding is all about learning!


  | Technology | Description | CRAE + Heroku | CRAE + DB | CRAE + Dotenv |
  | --- | --- | --- | --- | --- |
  | --- | --- | [Github]() | [Github]() | [Github]() |
  | [Homebrew](https://brew.sh/) | "The missing package manager for macOS (or Linux)" | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Atom](https://atom.io/) | Coding Text Editor | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Node](https://nodejs.org/en/) | JS Command Line Interface | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Yarn](https://github.com/yarnpkg/yarn) | Alternative Package Manager (Replaces NPM) | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [ReactJS](https://reactjs.org/) | Dynamic Front-End View | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Create-React-App](https://github.com/facebook/create-react-app) | "Zero" Configuration ReactJS Setup | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Express](https://expressjs.com/) | Back-End Api Routing | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Nodemon](https://nodemon.io/) | Automatic Server Restart | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [React-Router-Dom](https://github.com/ReactTraining/react-router#readme) | Front-End 'Router' | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [Babel 7](https://babeljs.io/) | ES6 Conversion to ES5 for Browser Compatibly | :white_check_mark: | :white_check_mark: | :white_check_mark: |
  | [PostgreSQL](https://www.postgresql.org/) | SQL Database | | :white_check_mark: | :white_check_mark: |
  | [Knex](https://knexjs.org/) | SQL Query Builder | | :white_check_mark: | :white_check_mark: |
  | [Dotenv](https://github.com/motdotla/dotenv#readme) | Allows Use of Environment Variable | | | :white_check_mark: |

# CRAE + Heroku
  * **Step 1:** Basic Installations & Directory Setup.
  * **Step 2:** Server (Root Directory) Updates.
  * **Step 3:** Client (Create-React-App) Updates.
  * **Step 4:** Deployment to Heroku.
  * **Step 5:** Celebration.

  > *This tutorial focues on building a basic CRAE App & deploying it to Heroku. If you are looking for my related tutorials [CRAE + DB](), [CRAE + Dotenv]() or another tutorial please check [here]().*

## **Step 1:** Basic Installations & Directory Setup
### Basic Installations:
  * Before we can begin, make sure you have these technologies installed.
  * We will add additional technologies in our project later as 'Dependencies'.
    * [Homebrew](https://brew.sh/)
      * (See site for installation instructions)
    * [Node](https://nodejs.org/en/)
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

  * **_>>> Check your progress <<<_**
    * Now that you've finished, your directories should look similar to this:
    * ![001](client/public/images/001_directory_setup.png?raw=true)

## **Step 2:** Server Updates
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

  * **_>>> Check your progress <<<_**
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
    * Great work! Both your *Server* & *Client* are working perfectly:
