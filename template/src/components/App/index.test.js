import {render, wait} from '@testing-library/react';
import App from './index';
import React from 'react';

test('App renders without crashing', async () => {
    const {getByText} = render(<App />);
    await wait(() => expect(getByText('v0.1.0')).toBeInTheDocument());
});
