import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../context/Context";
import { Link } from "react-router-dom";

export default function Book() {
  const data = useContext(dataContext);
  const { id } = useParams();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="content-section">
      <div className="summary-container mx-auto">
        <img
          className="summary-image"
          src={data.data && data.data[id] && data.data[id].show.image.original}
          alt=""
        />
        <div className="summary-text">
          <h1> Book Movie </h1>
          <h4>
            Movie name:{" "}
            <input
              type="text"
              className="input"
              value={data.data && data.data[id] && data.data[id].show.name}
            />
          </h4>
          <h4>
            Your name:{" "}
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </h4>
          <h4>
            Phone:{" "}
            <input
              type="text"
              className="input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </h4>
          <h4>
            Time:{" "}
            <input
              type="text"
              className="input"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </h4>
          Summary:{" "}
          <div
            className="summary-summary"
            dangerouslySetInnerHTML={{
              __html: data.data && data.data[id] && data.data[id].show.summary,
            }}
          />
          <Link to="/" className="btn btn-light">
            SUBMIT
          </Link>
          {"   "}
        </div>
      </div>
    </div>
  );
}
