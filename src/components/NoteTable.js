import { NoteRow } from "./NoteRow"

export const NoteTable =({notes, toggleNote})=>{
    return(
    <table>
        <thead>
          <tr>
            <th>notes</th>
          </tr>
        </thead>
        <tbody>
        {
        notes.map(note => (
            <NoteRow note={note} key={note.name} toggleNote={toggleNote}/>
        ))
      }
        </tbody>
      </table>
    )
}

