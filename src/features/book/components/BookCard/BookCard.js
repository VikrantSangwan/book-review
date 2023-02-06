import React from "react";
import "./BookCard.css";

function BookCard(props) {
  return (
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
            Langauge: <span>{props.item.language}</span>
          </p>

          <p className="card-text">
            Pages: <span>{props.item.pages}</span>
          </p>
        </div>
        <a href="#" className="btn btn-primary">
          Review Now
        </a>
      </div>
    </div>
  );
}

export default BookCard;
