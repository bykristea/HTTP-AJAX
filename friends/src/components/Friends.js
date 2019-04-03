import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.friends.map(friend => (
                        <tr key={friend.id}>
                            <td>{friend.name}</td>
                            <td>{friend.age}</td>
                            <td>{friend.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
        </div>
    );
}
}
export default Friends;

