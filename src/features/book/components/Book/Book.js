import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./Book.css";

function Book() {
  const { name } = useParams();
  console.log(name);
  const [data, setData] = useState({});
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((res) => {
        const found = res.find((b) => b.title === name);
        setBook(found);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="book-card">
        <img src={book.imageLink} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">
            Author: <span>{book.author}</span>
          </p>
          <p className="card-text">
            Year: <span>{book.year}</span>
          </p>
          <div className="data-container">
            <p className="card-text">
              Langauge: <span>{book.language}</span>
            </p>

            <p className="card-text">
              Pages: <span>{book.pages}</span>
            </p>
          </div>
          <a href="#" className="btn btn-primary">
            Review Now
          </a>
        </div>
      </div>
    </>
  );
}

export default Book;
