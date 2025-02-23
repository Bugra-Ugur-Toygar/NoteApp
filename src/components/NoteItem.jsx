import PropTypes from "prop-types";

function NoteItem({ note }) {
  return (
    <div className="note-item" style={{ backgroundColor: note.color }}>
      {note.text}
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoteItem;
