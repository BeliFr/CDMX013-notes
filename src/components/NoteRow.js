export const NoteRow = ({note, toggleNote}) => {
    return (
        <tr>
          <td>
            {note.name}
            <input type="checkbox"
            checked = {note.done}>
            onChange= {() => toggleNote(note)}
            </input>
          </td>
          </tr>
    )
}