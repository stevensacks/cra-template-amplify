import Amplify from '@aws-amplify/core';
import App from 'components/App';
import awsconfig from 'aws-exports';
import {withAuthenticator} from 'aws-amplify-react';

Amplify.configure(awsconfig);

const signUpConfig = {
    header: 'Sign Up',
    hideAllDefaults: true,
    defaultCountryCode: '1',
    signUpFields: [
        {
            label: 'Email',
            key: 'email',
            required: true,
            displayOrder: 1,
            type: 'string',
        },
        {
            label: 'Name',
            key: 'name',
            required: true,
            displayOrder: 2,
            type: 'string',
        },
        {
            label: 'Password',
            key: 'password',
            required: true,
            displayOrder: 3,
            type: 'password',
        },
    ],
};

export default withAuthenticator(App, {
    usernameAttributes: 'email',
    signUpConfig,
});
