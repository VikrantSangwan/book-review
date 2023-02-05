import BookCard from "../BookCard/BookCard";
import Header from "../Header/Header";
import { useEffect, useState } from "react";

function Home() {
  let [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((res) => {
        setbooks(res);
      });
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="row">
        {books.map((book) => {
          <div className="col-md-3">
            <BookCard />
          </div>;
        })}
      </div>
    </div>
  );
}

export default Home;
