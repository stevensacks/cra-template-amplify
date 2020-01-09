import Amplify from './amplify';
import React from 'react';
import ReactDOM from 'react-dom';
import './utils/platform';
import './font-awesome';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'element-scroll-polyfill';
import './index.scss';

ReactDOM.render(<Amplify />, document.getElementById('root'));
