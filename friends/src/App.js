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

  postFriend = (newFriend) => {
    axios
      .post('http://localhost:5000/friends', newFriend)
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

    if (!(this.state.newFriend.id && this.state.newFriend.name && this.state.newFriend.age && this.state.newFriend.email)){
      alert('Please fill in all friend fields.')
    } 
    
    else if (this.state.friends.map(friend => friend.id).includes(this.state.newFriend.id)) {
      this.deleteFriend(this.state.newFriend.id)
      this.postFriend(this.state.newFriend)
      let id = this.state.friends.map(friend => friend.id).sort((a, b) => b-a)
      this.setState({newFriend: {id: id[0]+1}});
      document.getElementById('friendForm').reset();
    } 
    
    else { 
      this.postFriend(this.state.newFriend)
      let id = this.state.newFriend.id + 1
      this.setState({newFriend: {id}});
      document.getElementById('friendForm').reset();
    } 
  }

  deleteFriend = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
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

  removeFriend = (e) => {
    e.preventDefault();
    this.deleteFriend(e.target.id)
  }

  putFriend = (id) => {
    axios
      .put(`http://localhost:5000/friends/${id}`)
      .then(res => {
        let target = res.data.filter(data => `${data.id}` === id)
        this.setState({ 
          newFriend: {
            id: target[0].id, 
            name: target[0].name,
            age: target[0].age,
            email: target[0].email,
          }
        })
      })
      .then(this.updateFriendForm)
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

  updateFriend = (e) => {
    e.preventDefault();
    this.putFriend(e.target.id);
  }

  updateFriendForm = () => {
    document.getElementById('name').value = this.state.newFriend.name;
    document.getElementById('age').value = this.state.newFriend.age;
    document.getElementById('email').value = this.state.newFriend.email;
  }

  render() {
    return (
      <div>
        {this.state.error ? <div>{this.state.error}</div> :
        <div>
          <h3>My Friends</h3>
          <Friends 
            friends={this.state.friends}
            removeFriend={this.removeFriend}
            updateFriend={this.updateFriend}
            />
          
          <h4>Want to be my friend?</h4>
          <NewFriend 
            addFriend={this.addFriend}
            handleInput={this.handleInput}
          />
        </div>}
      </div>
    );
  }
}

export default App;
