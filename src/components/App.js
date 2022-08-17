import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

var note = {
  title: "",
  content: "",
};

function App() {
  const [notes, setNotes] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function editNote(id) {
    note.title = notes[id].title;
    note.content = notes[id].content;
    setIsEdit(true);
    deleteNote(id);
  }

  function editFunc() {
    if (isEdit === true) {
      return (
        <div>
          <CreateArea onAdd={addNote} note={note} />
        </div>
      );
    } else {
      return <CreateArea onAdd={addNote} note={note} />;
    }
  }

  return (
    <div>
      <Header title="Notes App" />
      {editFunc()}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
