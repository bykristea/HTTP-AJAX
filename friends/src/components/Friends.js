import React from 'react';
import { Table } from 'reactstrap';
const Friends = (props) => {
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.friends.map(friend => (
                    <tr key={friend.id}>
                        <th scope="row">{friend.id}</th>
                        <td>{friend.name}</td>
                        <td>{friend.age}</td>
                        <td>{friend.email}</td>
                        <td onClick={props.removeFriend}>
                            <span id={friend.id} style={{fontWeight: "bold", cursor: "pointer"}}>
                                X
                            </span>
                        </td>
                    </tr>
                    ))}
            </tbody>
        </Table>
    );
}
export default Friends;

