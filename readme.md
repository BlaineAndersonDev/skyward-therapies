# CRAE + Heroku
  * ###### Create-React-App + Express + Deployment to Heroku.
  * Skeleton Modeled in April 2019.
  * Author: [Blaine Anderson](https://github.com/BlaineAndersonDev)
  * This App serves as a starting point with instruction for aspiring developers using the CRAE stack (create-react-app-express) & is prepared upon completion to be deployed to Heroku.

> This instructional tutorial assumes you have a minimal understanding of Javascript, React JSX, Express Routing & Heroku. If not, then let's try anyway! Coding is all about learning!

> *This tutorial focues on building a basic CRAE App & deploying it to Heroku. If you are looking for my related tutorials [CRAE + DB](), [CRAE + Dotenv]() or another tutorial please check [here]() or select a Github Repository below.*

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

## Basic Installations & Directory Setup:
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

  * **_>>> Check your progress <<<_**
    * Now that you've finished, your directories should look similar to this:
    ![001](client/public/images/001_directory_setup.png?raw=true)






## Server (Root Directory) Updates.
### SectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * **_>>> Check your progress <<<_**

### SectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * **_>>> Check your progress <<<_**

### SectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * ###### SubSectionHead:
  * **_>>> Check your progress <<<_**
