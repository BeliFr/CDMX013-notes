import { useAuth } from "../context/authContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddNote from "./AddNote";

export function Notes(){ 
    const [notes,] = useState('');
    const navigate = useNavigate ()
    const {user, logout, loading } = useAuth()

    const handleLogout = async ()=> {
      await logout();
      navigate ('/')
  
    }

    if (loading) return <h1>loading</h1>
    return <div className='containerNotes'>
      {notes}

      <h1>Hello { user.displayName|| user.email}!!</h1>

        <AddNote/>

      <button onClick={handleLogout}>logout</button>

</div>;
}


  // useState ejecutar antes de que se randerice el componente 
  /*export function Notes(){ 

  const [noteItems, setNoteItems] = useState([])
  const {user, logout, loading } = useAuth()
  const navigate = useNavigate ()

  const handleLogout = async ()=> {
    await logout();
    navigate ('/')

  }
  
  function createNewNotes(noteName){
    
    
    if (!noteItems.find(note => note.name === noteName)){
      setNoteItems([...noteItems, {name: noteName, done:false}])
    }
  }
  useEffect(()=>{
let data = localStorage.getItem('notes')
if(data){
  setNoteItems (JSON.parse(data))
}
  },[])

  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(noteItems))
  },[noteItems])
  return (
     <div className="Notes">
      <NoteCreator createNewNotes={createNewNotes}/>
  
      <table>
        <thead>
          <tr>
            <th>MY NOTES</th>
          </tr>
        </thead>
        <tbody>
        {
        noteItems.map(note => (
          <tr key={note.name}>
          <td>
            {note.name}
          </td>
          </tr>
        ))
      }
        </tbody>
      </table>
      <button onClick={handleLogout} className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full">logout</button>
     
    </div>
  
    );
  }*/
