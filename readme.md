# CRAE + Nav + Foot (*Guide #2*)
  * **Create-React-App + A Persistent Navigation Bar + A Stationary Footer**
  * [Live Site Example](https://crae-nav-foot.herokuapp.com/)
  * This guide was built in April 2019 by [Blaine Anderson](https://github.com/BlaineAndersonDev).
  * *This Guide is the __2nd__ in a series. Please make sure you're using the App previously built in this guide:*
    * Guide 1: [crae-heroku](https://github.com/BlaineAndersonDev/crae-heroku#crae--heroku)
  <!-- * Blaine Anderson's [Portfolio](http://www.blaineandersondev.com/) -->

  | Technology | Description | CRAE + Heroku | CRAE + Nav + Foot | CRAE + Axios | CRAE + Db | CRAE + Dotenv | CRAE + Cloudinary | CRAE + Auth0 |
  | --- | --- | --- | --- | --- | --- | --- | --- | --- |
  | --- | --- | [Github](https://github.com/BlaineAndersonDev/crae-heroku#crae--heroku) | [Github](https://github.com/BlaineAndersonDev/crae-nav-foot) | Github | Github | Github | Github | Github |
  | --- | --- | [Live Example](https://crae-nav-foot.herokuapp.com/) | Live Example | Live Example | Live Example | Live Example | Live Example | Live Example |
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

# CRAE + Nav + Foot
  * **Step 1:** Build File Structure
  * **Step 2:** Re-Configure App.js
  * **Step 3:** Setup Home
  * **Step 4:** Setup Navigation
  * **Step 5:** Setup Footer
  * **Step 6:** Setup Message
  * **Step 7:** Celebration

## **Step 1:** Build File Structure
  * First off, keeping your projects organized (regardless of language) will save you time now, in the future, and help anyone who looks at your code immensely.
  * **Do not underestimate the importance of organization!**
  * We are going to re-structure our App very simply based off an [Article](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) by Alexis Mangin. It won't be nearly as in depth as the article, but an App should be organized, regardless of size.

### Organized Layout Explained:
  * The app should look something along these lines when we finish:
  * ![011](client/public/images/011.png?raw=true)
  * To understand this organization, we'll go directory by directory.
    * The src directory holds our index.js, which is how the entire App iteslf it loaded.
    * The app directory holds our App.js, & App.css which will allow us to navigate throughout the app using react-router-dom.
    * The pages directory holds all the top-level Components we will use on every page. I.E. Nav.js & Footer.js. It also contains Home.js since that is our 'Root' Component.
    * The message directory is a specific directory that will only ever contain components for our /messages route. This means any smaller components loaded through Messages.js would also be located in this folder.
    * Keep in mind, this layout is a preference, and there is no wrong or right way to do it. Just make sure you keep it organized!
      * *Note: The .css files can all be housed in a directory located near their Component for further organization. Alternatively you can have one GIANT .css file, but I like them next to the required Component.*

### Creating Files & Directories
  * Make sure you're paying attention to where your located in terminal!
  * Lets start by navigating to your *Client* directory and removing some clutter:
    * 'rm -rf README.md'
  * Then lets navigate to your *Client/src* directory.
  * Create a new directory called 'app', then move all three 'app' files to that directory:
    * `mkdir app`
    * `mv App.js app`
    * `mv App.css app`
    * `mv App.test.js app`
  * In the same directory, let's remove some unused files to remove clutter:
    * 'rm -rf logo.svg'
    * 'rm -rf index.css'
  * Now move into the *Client/src/app* directory and create the 'pages' directory:
    * `mkdir pages`
    * This directoy is used as the starting directory for ALL other components (other than App.js & index.js).
  * Now move into the *Client/src/app/pages* directory.
  * Create all the files we will be using:
    * `touch Nav.js`
    * `touch Nav.css`
    * `touch Footer.js`
    * `touch Footer.css`
    * `touch Home.js`
    * `touch Home.css`
  * Create you last directory to contain all the 'message' Components:
    * `mkdir message`
    * *Note: I try to keep everything singular when creating Components and directories deeper than 'pages'. It helps me keep naming conventions straight.*
  * Create the last required files:
    * `touch Message.js`
    * `touch Message.css`

### **_>>> Step 1: Check your progress <<<_**
  * **Whew!** That was a lot of changes, but don't worry! Everything will get explained along the way.
  * Now would be a good time to commit and push to Github (Make sure to head back to the *Server* directory to get all the new files!)
  * Keep in mind, that since we're doing this in one fell swoop, the App will not work properly until we near the end of the tutorial.

## **Step 2:** Re-Configure index.js & App.js
  * Now begins the fun part, we get to make lots of alterations to implement our frontend router (react-router-dom) to it's full potential and make our Navbar useful.
  * First let's open index.js with Atom and change where it looks for 'App.js'.
    * Before: `import App from './App.js';`
    * After: `import App from './app/App.js';`
  * Second lets open App.js with Atom and overwrite the entire this with this code:
    ```
    import React, { Component } from 'react';
    import { BrowserRouter as Router, Route} from "react-router-dom";
    import Home from './pages/Home.js';
    import Message from './pages/message/Message.js';
    import Nav from './pages/Nav.js';
    import Footer from './pages/Footer.js';
    import './App.css';

    class App extends Component {
      render() {
        return (
          <Router>
            <div id="appContainer">

              <div id="appNavigation">
                <Nav />
              </div>

              <div id="appBody">
                <Route exact path='/' component={Home}/>
                <Route path='/message' component={Message}/>
              </div>

              <div id="appFooter">
                <Footer />
              </div>

            </div>
          </Router>

        );
      }
    }

    export default App;
    ```
    * This imports all those files we made from their specific directories.
    * It also implements our frontend Router and Route(s):
      * If we take a look at the code in App.js we can see that our entire Component is held within a `<Router>` tag.
      * This tells our App that we are creating a 'Single Page App'.
      * If we look at in the center of the Component's render, we see that there are `<Route>` tags. These are possible 'Components' we can load instantly without refreshing the App!
        * Let's look a bit deeper into these "Routes":
        * Our Root route looks for an **exact** match to the route `'/'`.
        * If it finds a match, it will render the Component 'Home', which we imported at the top of App.js:
        * `<Route exact path='/' component={Home}/>`
      * We don't always need an exact match however. Most of the time you'll just use this example to render Components:
        * `<Route path='/message' component={Message}/>`
    * Let's also open App.css and paste in the following styles:
    ```
    :root {
        /* Color Scheme: Cheerful */
        /* --dev-highlight:#00c853;
        --dev-background:#80cbc4;
        --dev-text:#050403;
        --dev-highlight-text:#050403;
        --dev-borders:#050403; */

        /* Color Scheme: Victory */
        /* --dev-highlight:#D6C82D;
        --dev-background:#2D3BD6;
        --dev-text:#F6F7F8;
        --dev-highlight-text:#050403;
        --dev-borders:#050403; */

        /* Color Scheme: Obnoxios */
        /* --dev-highlight:#2B9533;
        --dev-background:#952B8D;
        --dev-text:#050403;
        --dev-highlight-text:#F6F7F8;
        --dev-borders:#050403; */

        /* Color Scheme: Abyss */
        --dev-highlight:#bdbdbd;
        --dev-background:#424242;
        --dev-text:#F6F7F8;
        --dev-highlight-text:#050403;
        --dev-borders:#050403;
    }

    *{
      margin:0;
      padding:0;
    }
    html, body{
      height:100%;
    }
    #appContainer{
      min-height:100%;
    }
    #appNavigation{
    }
    #appBody{
      Display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    #appFooter{
      height: 150px;
      flex: 1;
    }
    ```
    * You'll notice that there are "Color Schemes". We've used variables in the CSS wo make changing the color of certain objects simpler.
    * To change the current "Color Scheme" just comment the current scheme and uncomment another. The other stylesheets will get the colors from here and display them properly.
    * A more in depth explanation is out of the scope of this tutorial, but more information can be found with Google :)

## **Step 3:** Setup Home
  * Moving on to our main Component 'Home'. This will just contain a simple Hello World that will be displayed when the site is loaded for the first time.
  * Let's open Home.js with Atom and paste in the following code:`
  ```
  import React, { Component } from 'react';
  import './Home.css';

  class Home extends Component {
    render() {
      return (
        // I tend to put the entire 'Component' into a single 'Container'. This allows me to control everything within the container easily.
        <div id="homeContainer">
          <h1 className="homeBox homeHeader">Hello World!</h1>
          <p className="homeBox homeText">This is the Home page.</p>
        </div>
      );
    }
  }

  export default Home;
  ```
  * Let's also open Home.css with Atom and paste in the following code:`
  ```
  #homeContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .homeBox {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
  }
  .homeHeader{
    flex: 1;
    font-size: 4em;
    margin: 30px;
    border-bottom: var(--dev-borders) 3px solid;
  }
  .homeText{
    font-size: 1.5em;
  }
  ```

## **Step 4:** Setup Navigation
  * Let's open Nav.js with Atom and paste in the following code:
  ```
  import React, { Component } from 'react';
  import { Link } from 'react-router-dom';
  import './Nav.css';

  class Nav extends Component {
    render() {
      return (
      <div id="navContainer">

        <div className="navBox"></div>

        <div className="navBox">
          <Link to={'./'} className="navLink">
            Home
          </Link>
          <Link to={'./message'} className="navLink">
            Messages
          </Link>
        </div>

        <div className="navBox"></div>

      </div>
      );
    }
  }

  export default Nav;
  ```
  * Here we can see another place where we import 'react-router-dom'. However, the use of "Link" here allows us to tell the router to go to those pages, using the `to={}` route provided.
    * I.E. The Link located here in Nav.js:
      ```
      <Link to={'./'} className="navLink">
        Home
      </Link>
      ```
    * Would tell the router to send App.js to the following route:
      ```
      <Route exact path='/' component={Home}/>
      ```
  * Let's also open Home.css with Atom and paste in the following code:`
  ```
  #navContainer{
    background: var(--dev-background);
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-bottom: var(--dev-borders) 3px solid;
  }
  .navBox{
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  .navLink{
    max-height:100px;
    max-width:100px;
    font-size: 2em;
    text-decoration: none;
    color: var(--dev-text);
    background: var(--dev-background);
    border: var(--dev-background) 2px solid;
    border-bottom: none;
    padding: 20px;
    display: flex; /* Centers Text */
    justify-content: center;/* Centers Text */
    align-items: center;/* Centers Text */
    transition: 0.25s linear;
  }
  .navLink:hover{
    background: var(--dev-highlight);
    color: var(--dev-highlight-text);
    border: var(--dev-borders) 2px solid;
    border-bottom: none;
  }
  ```

## **Step 5:** Setup Footer
  * The footer is much simpler, no crazy router changes here!
  * Let's open Footer.js with Atom and paste in the following code:
  ```
  import React, { Component } from 'react';
  import './Footer.css';

  class Footer extends Component {
    render() {
      return (
      <div id="footContainer">

        <div className="footBox"></div>

        <div className="footBox">
          <h1 className="footText">Footer</h1>
        </div>

        <div className="footBox"></div>

      </div>
      );
    }
  }

  export default Footer;
  ```
  * And of course, let's also open Footer.css with Atom and paste in the following code:`
  ```
  #footContainer{
    background: var(--dev-background);
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-top: var(--dev-borders) 3px solid;
  }
  .footBox{
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
  .footText{
    max-height:100px;
    max-width:100px;
    font-size: 2em;
    text-decoration: none;
    color: var(--dev-text);
    background: var(--dev-background);
    border: var(--dev-background) 2px solid;
    border-bottom: none;
    padding: 20px;
    display: flex; /* Centers Text */
    justify-content: center;/* Centers Text */
    align-items: center;/* Centers Text */
  }
  ```

### **_>>> Step 2-5: Check your progress <<<_**
  * At this point, the App should load properly (minus the Message.js Component), so let's boot it up!
  * Navigate over *Server* and run the dev command:
    * `yarn dev`
  * The page should load with a Navbar, Footer and Body, all of which should be minimally styled!
  * Don't forget to check out the color options located in App.css! Just uncomment the color you want to use and re-comment the one you don't want to use. Or make your own!
  * Now would be a good time to commit and push to Github (Make sure to head back to the *Server* directory to commit all the new files)!

## **Step 6:** Setup Message
  * Alright! Almost there!
  * Lets open up Message.js with Atom and paste in the following code:
  ```
  import React, { Component } from 'react';
  import './Message.css';

  class Message extends Component {
    constructor(props){
      super(props);
      this.state = {
        messages: []
      };
    };

    componentDidMount() {
    }

    getMessages = () => {
      fetch('/api/messages')
        .then(res => res.json())
        .then(messages => this.setState({ messages }));
    }

    removeMessages = () => {
      this.setState({
        messages: []
      })
    }

    render() {

      return (
        <div className="messageContainer">
          {this.state.messages.length ? (
            <div className="messageDisplay">
              <h1 className="messageHeader">4 Messages!</h1>
              <ul className="messageTextContainer">
                {this.state.messages.map((message, index) =>
                  <li key={message.id} className="messageText">
                    {message.message}
                  </li>
                )}
              </ul>
              <button
                className="messageButton"
                onClick={this.removeMessages}>
                Remove Messages From State?
              </button>
            </div>
          ) : (
            <div className="messageDisplay">
              <h1 className="messageHeader">No messages :(</h1>
              <button
                className="messageButton"
                onClick={this.getMessages}>
                Get Messages From API?
              </button>
            </div>
          )}
        </div>
      );
    }
  }

  export default Message;
  ```
  * There are a few changes to the way we show messages from our *Server*, take some time to look over the new changes.
  * When you've finished exploring the new Component, go ahead and open Message.css and paste in these styles:
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
  .messageTextContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
  }
  .messageText{
    margin: 8px;
    font-size: 2em;
    list-style-type: none;
  }
  ```
### **_>>> Step 6: Check your progress <<<_**
  * Now your entire App should work perfectly. Boot it up and try out getting Messages from your *Server*!
  * Don't forget to commit and push to Github **& Heroku**!

## **Step 7:** Celebration :clap:
  * **===> You've Competed This Tutorial! <====**
  * Now you've not only conquered Create-React-App + Express + Heroku but you've also implemented frontend routing *In Style*!
  * Take some time and enjoy your accomplishment, it was hard work!

## Credits!
  * A compiled list of Github Markdown safe Emoji's (Copy and Paste even!) :smile:
    * [rxaviers gist](https://gist.github.com/rxaviers/7360908)

## :floppy_disk: ---===> Continue Learning? <===--- :floppy_disk:
  * If you're interested in continuing to make this App even better, why not check out the next Guide in the series?
    * *The next guide aims to implement the [Axios](https://github.com/axios/axios) routing library for simple but powerful HTTP requests to our backend API!*
    * [CRAE+Axios]( )

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
