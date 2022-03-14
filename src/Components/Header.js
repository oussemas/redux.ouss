import React, { useState } from 'react'
import { Card, Form, InputGroup, Button, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../JS/Actions/actionTask'

const Header = () => {

    const [myInput, setMyInput] = useState("")

    const dispatch = useDispatch()

    const add = (e) => {
        e.preventDefault();
        if (myInput) {
            dispatch(addTask({ description: myInput, id: Math.random(), isDone: false }))
            setMyInput("")
        }
        else {
            alert('')
        }
    }

    return (
        <Card bg="primary">
            <Card.Body >
                <h1 className={"text-white"}>HELLO</h1>

                <Form onSubmit={add}>
                    <Form.Group>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setMyInput(e.target.value)}
                                value={myInput}
                            />
                            <Button variant="success" onClick={add}>
                                +
                            </Button>

                        </InputGroup>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Header