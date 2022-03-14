import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../JS/Actions/actionTask'
import EditItem from './EditItem'

const ListItems = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <ListGroup>
            {todos.map(el => (<ListGroup.Item
                key={el.id}
                style={{ display: "flex", alignItems: "flex-end" }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-around",
                        width: "30%",
                    }}
                >
                    <Button
                        variant="outline-secondary"
                        onClick={() => dispatch(completeTask(el.id))}
                    >
                        {el.isDone ? "unDone" : "Done"}
                    </Button>
                    <EditItem item={el} />
                    <Button
                        variant="danger"
                        onClick={() => dispatch(deleteTask(el.id))}
                    >
                        Delete
                    </Button>
                </div>
                <p style={{ margin: "0px", textDecoration: el.isDone ? "line-through" : "" }} >
                    {el.description}
                </p>
            </ListGroup.Item>))}
        </ListGroup>

    )
}

export default ListItems