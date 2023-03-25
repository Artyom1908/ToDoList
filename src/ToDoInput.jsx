import React, { useState } from 'react'
import './ToDoInput.css'

function ToDoInput({ Add }) {
    const [value, setValue] = useState('')
    function AddValue(e) {
        e.preventDefault()

        if (value !== '') {
            Add(value)
        }
        setValue('')
    }
    return (
        <div>
            <form style={{ padding: 15 }} onSubmit={AddValue}>
                <input className='Inp' type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button className='btn-add'>Add</button>
            </form>
        </div>
    )
}

export default ToDoInput