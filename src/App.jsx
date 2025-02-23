import { useState } from "react";
import NoteList from "./components/NoteList";
import NoteInput from "./components/NoteInput";
import SearchBar from "./components/SearchBar";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const addNote = (text, color) => {
    if (text.trim() === "") return;
    const newNote = {
      id: Date.now(),
      text,
      color,
    };
    setNotes([...notes, newNote]);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>NotesApp</h1>
      <SearchBar setSearchText={setSearchText} />
      <NoteInput addNote={addNote} />
      <NoteList notes={filteredNotes} />
    </div>
  );
}

export default App;
