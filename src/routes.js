import React from 'react';
import {Route ,IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} /> {/* means that if '/' is given then by default open HomePage */}
        <Route path="about" component={AboutPage} />
    </Route>
);