import React from 'react'
import './index.css'
import ToDoCheckBox from './ToDoCheckBox'

function ToDosList({ todos, ClearCompleted, Change }) {
    const Completed = todos.filter((todo) => todo.IsCompleted).length
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <ToDoCheckBox key={todo.id} todo={todo} Change={Change} />
                        </li>
                    )

                })
            }

            <div className="Footer">
                <span>{Completed}/{todos.length} Completed</span>
                <button onClick={ClearCompleted}>Clear Completed</button>
            </div>
        </div>
    )
}

export default ToDosList