import React, { Component } from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import NewFriend from './components/NewFriend';

class App extends Component {
  state = {
    friends: [],
    newFriend: {
      id: 0,
    },
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ 
          friends: res.data,
          newFriend: {
            id: res.data.length + 1,
          },
        })
      })
      .catch(err => {
        if (err.response.data) {
          const message = err.response.data.substring(
              err.response.data.lastIndexOf('<pre>') + 5, 
              err.response.data.lastIndexOf('</pre>')
          );
          this.setState({
            ...this.state, 
            error: `Error ${err.response.status}: ${message}`
          })  
        }          
      });
  }

  handleInput = (e) => {
    this.setState({
      newFriend: {
        ...this.state.newFriend, 
        [e.target.name]: e.target.value,
      }
    }) 
  }

  postFriend = (newFriends) => {
    axios
      .post('http://localhost:5000/friends', newFriends)
      .then(res => {
        this.setState({ friends: res.data})
      })
      .catch(err => {
        if (err.response) {
          const message = err.response.data.substring(
            err.response.data.lastIndexOf('<pre>') + 5, 
            err.response.data.lastIndexOf('</pre>')
          );
          this.setState({
            ...this.state, 
            error: `Error ${err.response.status}: ${message}`,
          })  
        }   
      })
  }

  addFriend = (e) => {
    e.preventDefault();
    if (this.state.newFriend.id && this.state.newFriend.name && this.state.newFriend.age && this.state.newFriend.email) {
      this.postFriend(this.state.newFriend)
      let id = this.state.newFriend.id + 1
      this.setState({newFriend: {id}});
      document.getElementById('friendForm').reset();
    } else {
      alert('Please fill in all friend fields.')
    }
  }
  render() {
    return (
      <div>
      {this.state.error && <div>{this.state.error}</div>}
        <h3>Friends:</h3>
        <Friends friends={this.state.friends}/>
        <h4>Let's be Friends!</h4>
        <NewFriend 
          addFriend={this.addFriend}
          handleInput={this.handleInput}
        />
     </div>
    );
  }
}

export default App;
