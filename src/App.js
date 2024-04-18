import React, {useState} from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CreateArea from './components/CreateArea.js';
import Note from './components/Note.js';



function App() {
    
    const[note,setNote] = useState([]);
    
    const addNote = function(newNote) {
        setNote((prevNotes) => {
        return [...prevNotes , newNote]
    })
    }
    
    const onDelete = function(id){
        setNote((prevNote) => {
            return prevNote.filter((noteItem,index) => {
                return index !== id;
            })
        })
    }
    

    return (
        <div className="App">
        <Header></Header>
        <CreateArea onAdd={addNote}></CreateArea>
        {note.map((noteItem,index) => {
        return(
            <Note key={index} id={index} title={noteItem.title} content={noteItem.content} deleteNote={onDelete}></Note>
        )
    })}
        <Footer></Footer>
        </div>
    );
}

export default App;
