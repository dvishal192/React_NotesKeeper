import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Note(props){
    
    const handleClick = function(){
        props.deleteNote(props.id)
    }
    
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><DeleteIcon /></button>
            <ToastContainer />
        </div>
    );
}

export default Note;