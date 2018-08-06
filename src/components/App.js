//This component handles the App template used in every page.
import React ,{Proptypes} from 'react';

class App extends React.Component {
    render(){
        return (
            <div className="container-fluid">
            <p>Header here........</p>
            {this.props.children}
            </div>
        );
    }
}

App.prototype = {
    children: Proptypes.object.isRequided
};

export default App;