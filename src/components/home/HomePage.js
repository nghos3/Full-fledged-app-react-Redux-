import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <h1>Administration</h1>
                <p>thsi is a small description of the Ad which goes just right here.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;