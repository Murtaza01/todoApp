import React, { useState } from "react";


export default function Note({ note, onRemove, id }) {
    const [addLine, setAddLine] = useState(false)

    function isClicked() {
        setAddLine(!addLine)
    }
    function handleClick() {
        onRemove(id)
    }
    return <>
        <div className="note">
            <p style={{ textDecoration: addLine ? "line-through" : "none" }}
                onClick={isClicked}>{note} </p>
            <span onClick={handleClick}>
                <i className="fa-regular fa-trash-can"></i>
            </span>
        </div>

    </>
}