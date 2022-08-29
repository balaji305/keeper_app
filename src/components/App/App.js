import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CreateArea from "../CreateArea/CreateArea";
import Note from "../Note/Note";

import "./App.css";

const initialState = {
  title: "",
  content: "",
  type: "",
};

function App() {
  const [notes, setNotes] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [ID, setID] = useState(0);
  const [note, setNote] = useState(initialState);

  function addNote(newNote) {
    if (!isEdit) {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    } else {
      notes.filter((res, index) => {
        if (ID === index) {
          res.title = newNote.title;
          res.content = newNote.content;
        }
        return true;
      });
      setNotes(notes);
    }
    setNote(initialState);
    setIsEdit(false);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function editNote(id) {
    setID(id);
    setNote({
      title: notes[id].title,
      content: notes[id].content,
    });
    setIsEdit(true);
  }

  return (
    <div className="app">
      <div className="app__header">
        <Header title="Notes App" />
      </div>
      <CreateArea onAdd={addNote} note={note} />
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
      <div className="app__footer">
        <Footer />
      </div>
      {console.log(notes)}
    </div>
  );
}

export default App;
