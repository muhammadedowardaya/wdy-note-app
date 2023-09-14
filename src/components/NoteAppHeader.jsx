import React from "react";

function NoteAppHeader({ charLimit }) {
  return (
    <div className="note-app__header">
      <h2>Buat Catatan</h2>
      <span className="charLimit">Sisa Karakter : {charLimit}</span>
    </div>
  );
}

export default NoteAppHeader;
