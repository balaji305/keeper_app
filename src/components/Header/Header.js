import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import "./Header.css";

const date = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function Header(props) {
  return (
    <div className="header">
      <div className="header__left">
        <header>
          <h1 className="header__left__title">
            <HighlightIcon />
            {props.title}
          </h1>
        </header>
      </div>
      <div className="header__right">
        <h2 className="header__right__date">
          {weekday[date.getDay()]}, {date.getDate()}/{date.getMonth()}/
          {date.getFullYear()}
        </h2>
      </div>
    </div>
  );
}

export default Header;
