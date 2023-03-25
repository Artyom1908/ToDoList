import React from 'react'
import './ToDoCheckBox.css'
function ToDoCheckBox({ todo, Change }) {
    return (
        <div className='item'>
            <label>
                {todo.title}
                <input type="checkbox" checked={todo.IsCompleted} onChange={(e) => {
                    Change({
                        ...todo,
                        IsCompleted: e.target.checked
                    })

                }} />

            </label>
        </div>
    )
}

export default ToDoCheckBox