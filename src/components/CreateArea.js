import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateArea(props){
    
    const [note,setNote] = useState({
        title: '',
        content: ''
    });
    
    const handleChange = function(event){
        const {name,value}  = event.target;
       
        setNote((prevNote) => {
            return {...prevNote, [name]: value}
        })
    }
    
    const submitNote = function(event){
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        })
        event.preventDefault();
    }
    
    
    return(
        <div>
        <form>
        <input type='text' name='title' onChange={handleChange} placeholder='Add a title..' value={note.title} />
        <textarea name='content' onChange={handleChange} placeholder='Create a Note' rows= "3" value={note.content} />
        <button onClick = {submitNote}><AddIcon /></button>
        </form>
        </div>
    )
}

export default CreateArea;