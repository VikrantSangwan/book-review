import React from "react";
import "./BookCard.css";

function BookCard() {
  return (
    <div className="card">
      <img
        src="images/the-divine-comedy.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">The Divine Comedy</h5>
        <p className="card-text">
          Author: <span>Dante Alighieri</span>
        </p>
        <p className="card-text">
          Year: <span>2013</span>
        </p>
        <p className="card-text">
          Pages <span>397</span>
        </p>
        <a href="#" className="btn btn-primary">
          Review Now
        </a>
      </div>
    </div>
  );
}

export default BookCard;
