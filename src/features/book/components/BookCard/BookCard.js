import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";

function BookCard(props) {
  return (
    <Link to={"book/" + props.item.title}>
      <div className="card">
        <img src={props.item.imageLink} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.item.title}</h5>
          <p className="card-text">
            Author: <span>{props.item.author}</span>
          </p>
          <p className="card-text">
            Year: <span>{props.item.year}</span>
          </p>
          <div className="data-container">
            <p className="card-text">
              Language: <span>{props.item.language}</span>
            </p>

            <p className="card-text">
              Pages: <span>{props.item.pages}</span>
            </p>
          </div>
          <Link to="/" className="btn btn-primary">
            Review Now
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default BookCard;
