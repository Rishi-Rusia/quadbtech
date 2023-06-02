import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../context/Context";
import { Link } from "react-router-dom";

export default function Summary() {
  const data = useContext(dataContext);
  const { id } = useParams();

  return (
    <div className="content-section">
      <div className="summary-container mx-auto">
        <img
          className="summary-image"
          src={data.data && data.data[id] && data.data[id].show.image.original}
          alt=""
        />

        <div className="summary-text">
          <h1 className="summary-title">
            {data.data && data.data[id] && data.data[id].show.name}
          </h1>
          <div
            className="summary-summary"
            dangerouslySetInnerHTML={{
              __html: data.data && data.data[id] && data.data[id].show.summary,
            }}
          />
          <Link to="/" className="btn btn-light">
            <i class="fa-solid fa-house"></i> HOME
          </Link>
          {"   "}
          <Link to={`/book/${id}`} className="btn btn-light">
            <i class="fa-solid fa-ticket"></i> BOOK
          </Link>
        </div>
      </div>
    </div>
  );
}
