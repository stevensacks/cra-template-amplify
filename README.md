This is an AWS Amplify Create React App bootstrapped with my preferred setup.

This template comes with TypeScript, but TypeScript is not enabled by default. 

I'm still working through my ESLint ruleset with TypeScript. 🤷🏻‍♂️

# Setup

After installing this template with CRA, the first thing you should do in the project folder is run `yarn upd`. This will make sure that all of the libraries are updated to the latest versions.

This template is set up to support Authentication. If you don't need it, you can strip it out. 

Follow the instructions for how to configure your Amplify project here:

https://aws-amplify.github.io/docs/js/react

https://aws-amplify.github.io/docs/js/datastore


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>

### `yarn cypress`

Launches the Cypress test runner.

### `yarn amplify-modelgen`

Generates the models for amplify

### `yarn amplify-push`

Pushes to amplify. However, it's probably better to use `amplify push`.

### `yarn upd`

Update all packages to the latest versions and launches the development server.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test-cov`

Launches the test runner and also generates a code coverage report.

### `yarn test-cov-view`

Requires browser-sync to be install globally. Watches the code coverage folder and automatically refreshes the browser when it changes.
