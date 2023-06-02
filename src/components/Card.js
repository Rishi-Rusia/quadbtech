import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div>
      <div>
        <figure>
          <img src={props.image} alt="Mountains" />
          <figcaption>{props.name}</figcaption>

          <div
            className="movie-details text-outline"
            style={{ fontFamily: "" }}
          >
            <b>
              <u>
                {" "}
                <h1>{props.name}</h1>
              </u>
              <p className="paragraph-text">Runtime: {props.runtime}</p>
              <p className="paragraph-text">Genre: {props.genre}</p>
              <p className="paragraph-text">score: {props.score}</p>
              <p className="paragraph-text">status: Running</p>
              <Link className="btn btn-light" to={`/summary/${props.index}`}>
                Learn More
              </Link>
            </b>
          </div>
        </figure>
      </div>
    </div>
  );
}
