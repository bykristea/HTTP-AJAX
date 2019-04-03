import React, { Component } from 'react';
import Friends from './components/Friends';
import NewFriend from './components/NewFriend';

class App extends Component {
  render() {
    return (
      <div>
     <Friends />
     <NewFriend />
     </div>
    );
  }
}

export default App;
