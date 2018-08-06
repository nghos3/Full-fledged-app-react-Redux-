import React from 'react';
import {link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>APP ADMINISTRATION</h1>
                <p>React , Redux and React-Router ultra-responsive pages</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;