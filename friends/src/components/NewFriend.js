import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NewFriend = (props) => {
    return(
        <Form inline onSubmit={props.addFriend} id='friendForm'>
            <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                <Label for='name' className='mr-sm-2'><strong>Name</strong></Label>
                <Input onChange={props.handleInput} type='text' name='name' id='name' placeholder='First Name' />
            </FormGroup>

            <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                <Label for='age' className='mr-sm-2'><strong>Age</strong></Label>
                <Input onChange={props.handleInput} type='number' name='age' id='age' placeholder='Age' />
            </FormGroup>

            <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                <Label for='email' className='mr-sm-2'><strong>Email</strong></Label>
                <Input onChange={props.handleInput} type='email' name='email' id='email' placeholder='JDoe@example.com' />
            </FormGroup>

            <Button onClick={props.addFriend}>Yay Friends!</Button>
        </Form>
    )
}

export default NewFriend;