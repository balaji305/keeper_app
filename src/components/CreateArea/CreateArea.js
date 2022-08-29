import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import "./CreateArea.css";

function CreateArea(props) {
  useEffect(() => {
    setNote(props.note);
  }, [props.note]);

  const [note, setNote] = useState(props.note);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (note.title.length > 20) {
      note.title = note.title.substring(0, 20) + "...";
    }
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      type: "normal",
    });
    event.preventDefault();
  }

  return (
    <div className="createArea">
      <form className="createArea__form">
        <input
          className="createArea__form__title"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />

        <textarea
          className="createArea__form__content"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={3}
        />

        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
