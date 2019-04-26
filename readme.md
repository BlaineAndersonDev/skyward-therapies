# CRAE + Heroku
  * ###### Create-React-App + Express + Deployment to Heroku.
  * Skeleton Modeled in April 2019.
  * Author: [Blaine Anderson](https://github.com/BlaineAndersonDev)
  * This App serves as a starting point with instruction for aspiring developers using the CRAE stack (create-react-app-express) & is prepared upon completion to be deployed to Heroku.

> This instructional tutorial assumes you have a minimal understanding of Javascript, React JSX, Express Routing & Heroku. If not, then let's try anyway! Coding is all about learning!

> *This tutorial focues on building a basic CRAE App & deploying it to Heroku. If you are looking for my related tutorials [CRAE + DB](), [CRAE + Dotenv]() or another tutorial please check [here]() or select a Github Repository below.*

  | Technology | Description | CRAE + Heroku | CRAE + DB | CRAE + Dotenv |
  | --- | --- | --- | --- | --- |
  | <center>---</center> | <center>---</center> | <center>[Github]()</center> | <center>[Github]()</center> | <center>[Github]()</center> |
  | <center>[Homebrew](https://brew.sh/)</center> | <center>"The missing package manager for macOS (or Linux)"</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> |
  | <center>[Atom](https://atom.io/)</center> | <center>Coding Text Editor</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> |
  | <center>[Node](https://nodejs.org/en/)</center> | <center>JS Command Line Interface</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> |
  | <center>[Yarn](https://github.com/yarnpkg/yarn)</center> | <center>Alternative Package Manager (Replaces NPM)</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> |
  | <center>[ReactJS](https://reactjs.org/)</center> | <center>Dynamic Front-End View</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> |
  | <center>[Create-React-App](https://github.com/facebook/create-react-app)</center> | <center>"Zero" Configuration ReactJS Setup</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> |
  | <center>[Express](https://expressjs.com/)</center> | <center>Back-End Api Routing</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> |
  | <center>[Nodemon](https://nodemon.io/)</center> | <center>Automatic Server Restart</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> |
  | <center>[React-Router-Dom](https://github.com/ReactTraining/react-router#readme)</center> | <center>Front-End 'Router'</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> |
  | <center>[Babel 7](https://babeljs.io/)</center> | <center>ES6 Conversion to ES5 for Browser Compatibly</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> |
  | <center>[PostgreSQL](https://www.postgresql.org/)</center> | <center>SQL Database</center> | | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> |
  | <center>[Knex](https://knexjs.org/)</center> | <center>SQL Query Builder</center> | | <center>:white_check_mark:</center> | <center>:white_check_mark:</center> |
  | <center>[Dotenv](https://github.com/motdotla/dotenv#readme)</center> | <center>Allows Use of Environment Variable</center> | | | <center>:white_check_mark:</center> |

# CRAE + Heroku
  * **Step 1:** Basic Installations & Directory Setup.
  * **Step 2:** Server (Root Directory) Updates.
  * **Step 3:** Client (Create-React-App) Updates.
  * **Step 4:** Deployment to Heroku.
  * **Step 5:** Celebration.


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
  * Make your root directory a git repository:
    * This allows you to control the entire App from your root (or server) directory.
    * This also prevents create-react-app from creating its own git automatically (which is more of a headache than an actual problem).
    * `git init`
  * User create-react-app to create a directory called "client":
    *  create-react-app generates all the required files automatically for your front-end!
    * `create-react-app client`

  * Now that we've laid the groundwork for our Project, we will need to make some changes & add some new files to the "Root" (*server*) & *client* directories.
  * From here on, we will refer to our "Root" directory as our "*Server*".

  * ##### **_>>> Check your progress <<<_**
    * Now that you've finished, your directories should look similar to this:
      * ![001](client/public/images/001_directory_seetup.png?raw=true)





### SectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * ##### **_>>> Check your progress <<<_**

### SectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * ##### **_>>> Check your progress <<<_**

### SectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * ##### **_>>> Check your progress <<<_**
