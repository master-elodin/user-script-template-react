import React from 'react';
import ReactDOM from 'react-dom';

require('./styles/styles.scss');

class ServerPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: "nothing"};
    }
    render() {
        return(
            <h2 className='server-message'>{this.state.data}</h2>
        );
    }
}

class Main extends React.Component {
  render() {
    return (
      <div>
        <h2 className='initial-message'>I've received the following message from the server:</h2><br/>
        < ServerPart />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));