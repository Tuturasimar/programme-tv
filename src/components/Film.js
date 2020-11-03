import React from "react";

const Film = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <p>{props.type}</p>
      <div className="line">
        <span>{props.duration}</span>
        <span>
          {props.direct && (
            <ul>
              <li>Direct</li>
            </ul>
          )}
        </span>
        <span>
          {props.isUnseen && (
            <ul>
              <li>Inédit</li>
            </ul>
          )}
        </span>
      </div>
    </div>
  );
};

export default Film;
