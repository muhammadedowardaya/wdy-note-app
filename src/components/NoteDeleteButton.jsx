import React from 'react';
 
function NoteDeleteButton({ id, onDelete }) {
  return <button className='note-item__delete' onClick={() => onDelete(id)}>delete</button>
}
 
export default NoteDeleteButton;