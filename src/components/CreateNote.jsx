import React, { useState } from "react";

export default function CreateNote({ onAdd }) {
    const [note, setNote] = useState("")

    function handleChange(event) {
        const { value } = event.target
        setNote(value)
    }

    function onSubmit() {
        onAdd(note)
        setNote("")
    }

    return <>
        <h1>Add To Do Item</h1>
        <p>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</p>
        <div id="form">
            <input type="text" value={note} placeholder="Add a Task" onChange={handleChange} />
            <button onClick={onSubmit}>Add It</button>
        </div>
    </>
}