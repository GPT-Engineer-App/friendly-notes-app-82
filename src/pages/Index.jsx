import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import NoteCard from '@/components/NoteCard';
import SearchBar from '@/components/SearchBar';
import AddNote from '@/components/AddNote';

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = (text) => {
    setNotes([...notes, { id: Date.now(), text, tags: [] }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (id, newText) => {
    setNotes(notes.map(note => note.id === id ? { ...note, text: newText } : note));
  };

  const addTag = (noteId, tag) => {
    setNotes(notes.map(note => 
      note.id === noteId ? { ...note, tags: [...note.tags, tag] } : note
    ));
  };

  const removeTag = (noteId, tagToRemove) => {
    setNotes(notes.map(note => 
      note.id === noteId ? { ...note, tags: note.tags.filter(tag => tag !== tagToRemove) } : note
    ));
  };

  const filteredNotes = notes.filter(note => 
    note.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Notes App</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <AddNote addNote={addNote} />
      <div className="space-y-4 mt-6">
        {filteredNotes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            editNote={editNote}
            addTag={addTag}
            removeTag={removeTag}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;