import React from 'react';
 
function NoteArsipButton({ id, onArsip }) {
  return <button className='note-item__arsip' onClick={() => onArsip(id)}>Arsipkan</button>
}
 
export default NoteArsipButton;