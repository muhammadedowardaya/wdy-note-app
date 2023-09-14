import React from "react";

function NoteMoveButton({ id, onMove }) {
    return (
        <button className="note-item__move" onClick={() => onMove(id)}>
            pindahkan
        </button>
    );
}

export default NoteMoveButton;
