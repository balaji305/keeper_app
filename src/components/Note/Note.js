import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import "./Note.css";

function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }
  function handleEdit() {
    props.onEdit(props.id);
  }

  return (
    <div className="note">
      <h1 className="note__title">{props.title}</h1>
      <p className="note__content">{props.content}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
      <button onClick={handleEdit}>
        <EditIcon />
      </button>
    </div>
  );
}

export default Note;
