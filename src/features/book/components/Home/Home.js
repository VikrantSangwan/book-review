import BookCard from "../BookCard/BookCard";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setbooks(res);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="row">
        {books.map((book) => (
          <div className="col-md-2">
            <BookCard item={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
