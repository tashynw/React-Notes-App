import React from 'react';
import { FcPlus } from "react-icons/fc";

const AddNote = ({ handleAdd,setNoteData,setNewNote,noteData,newNote }) => {
  return (
    <form onSubmit={handleAdd} className='add-container'>
        <input type="text" placeholder='Add Note' className='add-box' defaultValue={newNote} auto="true" required onChange={(e)=>setNewNote(e.target.value)}/>
        <button type='submit' className='add-button'>
            <FcPlus size={30}/>
        </button> 
    </form>
  )
}

export default AddNote