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
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis lacus id massa viverra condimentum. Sed non volutpat orci, et mollis lorem. Nam ac mollis orci. Pellentesque accumsan a leo in suscipit. Donec sem est, faucibus sed sem vitae, volutpat elementum mauris. Aenean varius nunc augue, at consequat lacus sollicitudin ac. Morbi mattis lorem id augue tempus, non vestibulum odio lobortis.Nullam efficitur neque diam, id placerat libero egestas in. Ut scelerisque efficitur nisl, quis ornare lorem lacinia eu. Quisque eu feugiat lectus, et consectetur mauris. Proin non luctus orci. Praesent ex est, mattis in pellentesque eget, sodales a metus</p>
                </div>
                <div className ="submit">
                    <h1>Submissions</h1>
                    <p> Coming soon, because apparently creating an email submission thin is kinda hard and Andrew is not a total wizard.</p>                    
                </div>
            </div>
  }
}

export default Home;