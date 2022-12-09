import { useState } from "react";

export const NoteCreator = ({createNewNotes}) => {
  const [newNoteName, setNewNoteName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewNotes(newNoteName);
    localStorage.setItem("notas", newNoteName);
    setNewNoteName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new note"
        value={newNoteName}
        onChange={(e) => setNewNoteName(e.target.value)}
      />
      <button onClick={() => alert(newNoteName)}>Save note</button>
    </form>
  );
};
