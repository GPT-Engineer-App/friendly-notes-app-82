import { useState } from 'react';
import { Input } from "@/components/ui/input";

const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      addNote(noteText);
      setNoteText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add a new note"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        className="mb-4"
      />
    </form>
  );
};

export default AddNote;