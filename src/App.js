import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Book from "./features/book/components/Book/Book";
import Home from "./features/book/components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book/:name" element={<Book />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
