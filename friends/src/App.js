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
<<<<<<< HEAD
      .catch(err => console.log(err));
=======
      .catch(err => console.log(err));;
>>>>>>> 8d19420... MVP update function
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
<<<<<<< HEAD
      .catch(err => console.log(err))
=======
      .catch(err => console.log(err));
>>>>>>> 8d19420... MVP update function
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

  deleteFriend = (id) => {
    axios
<<<<<<< HEAD
    .delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState({ friends: res.data })
    })
    .catch(err => console.log(err))
=======
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data})
      })
      .catch(err => console.log(err));
>>>>>>> 8d19420... MVP update function
  }

  removeFriend = (e) => {
    this.deleteFriend(e.target.id)
  }
<<<<<<< HEAD
  render() {
    return (
      <div>
      {this.state.error && <div>{this.state.error}</div>}
        <h3>Friends:</h3>
        <Friends 
        friends={this.state.friends}
        removeFriend={this.removeFriend}
        />

        <h4>Let's be Friends!</h4>
        <NewFriend 
          addFriend={this.addFriend}
          handleInput={this.handleInput}
        />
     </div>
=======

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
      .catch(err => console.log(err));
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
          <h3>Friends:</h3>
          <Friends 
            friends={this.state.friends}
            removeFriend={this.removeFriend}
            updateFriend={this.updateFriend}
            />
          
          <h4>Let's be Friends!</h4>
          <NewFriend 
            addFriend={this.addFriend}
            handleInput={this.handleInput}
          />
       
      </div>
>>>>>>> 8d19420... MVP update function
    );
  }
}

export default App;
