import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from 'lucide-react';

const NoteCard = ({ note, deleteNote, editNote, addTag, removeTag }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);
  const [newTag, setNewTag] = useState('');

  const handleEdit = () => {
    editNote(note.id, editedText);
    setIsEditing(false);
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (newTag.trim()) {
      addTag(note.id, newTag.trim());
      setNewTag('');
    }
  };

  const bgColors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100'];
  const bgColor = bgColors[note.id % bgColors.length];

  return (
    <Card className={`${bgColor} relative`}>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2"
        onClick={() => deleteNote(note.id)}
      >
        <X className="h-4 w-4" />
      </Button>
      <CardContent className="pt-8">
        {isEditing ? (
          <div>
            <Input
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="mb-2"
            />
            <Button onClick={handleEdit} className="mr-2">Save</Button>
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
          </div>
        ) : (
          <p className="mb-4 cursor-pointer" onClick={() => setIsEditing(true)}>{note.text}</p>
        )}
        <div className="flex flex-wrap gap-2 mb-2">
          {note.tags.map((tag, index) => (
            <span key={index} className="bg-white px-2 py-1 rounded-full text-sm flex items-center">
              {tag}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-1"
                onClick={() => removeTag(note.id, tag)}
              >
                <X className="h-3 w-3" />
              </Button>
            </span>
          ))}
        </div>
        <form onSubmit={handleAddTag} className="flex gap-2">
          <Input
            type="text"
            placeholder="Add tag"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">Add</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default NoteCard;