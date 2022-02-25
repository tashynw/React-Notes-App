import React from 'react';
import { FcFullTrash } from "react-icons/fc";

const Notes = ({ noteData,setNoteData,handleDelete }) => {
  return (
    <ul className='notes-container'> 
        {noteData.length? (noteData.map((element)=>(
            <li key={element.id} className='note-item'>
                <label className='item-text'>{element.text}</label>
                <FcFullTrash role="button" size={50} className='remove-icon' onClick={()=>handleDelete(element.id)}/>
            </li>
        ))) : (
            <p>No Items to Show!</p>
        )}
    </ul>
  )
}

export default Notes