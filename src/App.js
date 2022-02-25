
import Header from './Header';
import AddNote from './AddNote';
import Notes from './Notes';
import './App.css';
import { useEffect, useState } from 'react';
import apiRequest from './apiRequest';

function App() {
  const API_URL='http://localhost:3500/notes';
  const [noteData,setNoteData] = useState([]);
  const [newNote,setNewNote]=useState('');
  const setAndSaveNotes = (newItems) => {
    setNoteData(newItems);
    localStorage.setItem('notes', JSON.stringify(newItems));
  }

  const addNote=async(textString)=>{
    const id = noteData.length ? noteData[noteData.length-1].id+1 : 1;
    const newObject = {id,text:textString};
    const newNoteData = [...noteData,newObject];
    setAndSaveNotes(newNoteData);

    const postOptions={
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(newObject)

    }
    const result = await apiRequest(API_URL, postOptions);
    
  }

  const handleAdd=(e)=>{
    e.preventDefault();
    if(!newNote) return;
    addNote(newNote);
    setNewNote('');
  }
  const handleDelete=async(id)=>{
    const updatedData=noteData.filter((element)=>element.id!==id);
    setNoteData(updatedData);

    const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);

  }

  useEffect(()=>{
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const noteItems = await response.json();
        setNoteData(noteItems);
      }catch(err){
        console.log(err);
      }
    }
    fetchItems();
  },[]);
  
  return (
    <div className="App">
      <Header title="Tashyn Notes App"/>
      <div className='menu-bar-container'>
        <AddNote 
          noteData={noteData}
          handleAdd={handleAdd}
          setNoteData={setNoteData}
          newNote={newNote}
          setNewNote={setNewNote}
        />
      </div>
      <div className='content-container'>
        <Notes 
          handleDelete={handleDelete}
          noteData={noteData}
          setNoteData={setNoteData}
          />
      </div>
    </div>
  );
}

export default App;
