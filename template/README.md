# Create React App Amplify Template

Run this command to use this template:
```
npx create-react-app your-project --template amplify
```

This is an AWS Amplify Create React App bootstrapped with my preferred setup of ESLint, Prettier, and a bunch of libraries common to most projects, such as lodash, date-fns, core-js, validator, etc.

It comes with a basic amplify.yml, cypress.json, and jsconfig.json that sets the src folder as the root url for React and Cypress.

You must have already gone through the process of installing the Amplify CLI on your computer.

## Setup

After installing this template with CRA, do the following:
 
Cut and paste the contents of `pkg.json` into your package.json. The husky, lint-staged, and jest configurations are not currently supported by templates. Also, the CRA team doesn't like separating dev dependencies, but I do, so you need these, as well. You can delete the `pkg.json` file after you're finished.
 
Run `yarn upd`. This will make sure that all of the libraries are updated to the latest versions.

Run `amplify init`. For instructions on how to set this up check here:
* https://aws-amplify.github.io/docs/js/start?platform=purejs

This template is set up to support Authentication. If you don't need it, you can delete everything below line 7 in `src/amplify.js` and simply `export default App`.

Follow the instructions for how to configure your Amplify project here:

* https://aws-amplify.github.io/docs/js/react
* https://aws-amplify.github.io/docs/js/datastore

When you run `amplify push`, if you're using DataStore, choose "No" for generating GraphQL code.

## Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br>

#### `yarn cypress`

Launches the Cypress test runner.

#### `yarn amplify-modelgen`

Generates the models for amplify

#### `yarn amplify-push`

Pushes to amplify. However, it's probably better to use `amplify push`.

#### `yarn upd`

Update all packages to the latest versions and launches the development server.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn test-cov`

Launches the test runner and also generates a code coverage report.

#### `yarn test-cov-view`

Requires browser-sync to be install globally. Watches the code coverage folder and automatically refreshes the browser when it changes.
