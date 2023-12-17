import React, { useState } from "react"
import CreateNote from "./CreateNote"
import Note from "./Note"

function App() {
    const [notes, setNotes] = useState([])

    function addItem(note) {
        setNotes((previousNotes) => {
            return [...previousNotes, note]
        })

    }
    function deleteItem(id) {
        return setNotes((previousNotes) => {
            return previousNotes.filter((item, index) => {
                return index !== id
            })
        })
    }
    return <>
        <main>
            <CreateNote onAdd={addItem} />
            {notes.map((item, index) => {
                return <Note
                    key={index}
                    id={index}
                    note={item}
                    onRemove={deleteItem}
                />
            })}
        </main>
    </>
}

export default App