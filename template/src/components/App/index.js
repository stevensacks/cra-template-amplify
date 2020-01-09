import {Auth} from 'aws-amplify';
import React from 'react';
import './index.scss';

const App = () => (
    <div className="app">
        <header className="app-header">
            <div>
                <span>v0.1.0</span>
            </div>
            <button className="sign-out-link" onClick={() => Auth.signOut()}>
                Sign Out
            </button>
        </header>
    </div>
);

export default App;
