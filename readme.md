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
  * **Step 2:** Setup Home
  * **Step 2:** Setup Navigation
  * **Step 3:** Setup Footer
  * **Step 2:** Re-Configure App.js
  * **Step 4:** Finishing Touches
  * **Step 5:** Celebration
  * **Step 6:** _______

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
  * **Whew!** That was a lot of changes, but don't worry! Everything will get explained along the way.

### Implementing Organization:
  * Let start by navigating to your *Client* directory.
  * Now we going to

### **_>>> Step _______: Check your progress <<<_**
  *




<!--
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
 -->

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
