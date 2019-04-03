import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NewFriend = () => {
    return(
        <div>
            <h4>Let's be Friends!</h4>
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="name" className="mr-sm-2"><strong>Name</strong></Label>
                    <Input type="text" name="name" id="name" placeholder="First Name" />
                </FormGroup>

                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="age" className="mr-sm-2"><strong>Age</strong></Label>
                    <Input type="number" name="age" id="age" placeholder="Age" />
                </FormGroup>

                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="email" className="mr-sm-2"><strong>Email</strong></Label>
                    <Input type="email" name="email" id="email" placeholder="friend@example.com" />
                </FormGroup>

                <Button>Yay Friends!</Button>
            </Form>
        </div>
    )
}

export default NewFriend;