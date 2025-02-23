import PropTypes from "prop-types";
import { useState } from "react";

function NoteInput({ addNote }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#a3e635");

  const handleAddNote = () => {
    addNote(text, color);
    setText("");
  };

  return (
    <div className="note-input">
      <textarea
        placeholder="Enter your note here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="color-picker">
        {["#e879f9", "#facc15", "#38bdf8", "#a3e635"].map((c) => (
          <button
            key={c}
            style={{ backgroundColor: c }}
            onClick={() => setColor(c)}
          />
        ))}
      </div>
      <button className="add-btn" onClick={handleAddNote}>
        ADD
      </button>
    </div>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
