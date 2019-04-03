import React, { Component } from 'react';
import axios from 'axios';

class Friends extends Component {
    state = {
        friends: [],
        error: ''
    };

    componentDidMount() {
        axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState({
                friends: response.data,
                error: ''
            })
        })

        .catch(err => console.log(err));
    }


render () {
    return (
        <div>
            <h3>Friends:</h3>
            {this.state.friends.map(friend => (
                <div key={friend.id}>
                    <div>Name: {friend.name}</div>
                    <div>Age: {friend.age}</div>
                    <div>Email: {friend.email}</div>
                    <br></br>
                </div>
            ))}
        </div>
    );
}
}
export default Friends;

