import React from 'react';
import ReactDOM from 'react-dom'
import {browserHistory, Link} from 'react-router'

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return <div className="pageHeader">
                <div className="logo">
                     bluebird.
                </div>
                <div className="blueStripe"></div>
              
                <div className="content_container">
                    {this.props.children}
                </div>
              </div>
  
  }
}

export default Dashboard;