import React from 'react';
import {Link} from 'react-router'

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return  <div className ="home_container">
                <div className ="textBox">
                    <h1> What is bluebird?</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec facilisis neque. Etiam congue non est eget sollicitudin. Duis et gravida lectus, ac tincidunt lectus. Cras faucibus erat eget arcu euismod varius. Maecenas non faucibus leo, non condimentum lectus. Praesent fringilla, orci eu scelerisque cursus, est sem dictum erat, eu elementum mauris lorem a eros. Vivamus in tortor tempus odio dictum molestie.</p>
                </div>
            </div>
  }
}

export default Home;