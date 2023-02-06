import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const handleOnSelect = (item) => {
    console.log(item);
    navigate("/book/" + item.title);
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.title}
        </span>
      </>
    );
  };

  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
      });
  }, []);

  return (
    <ReactSearchAutocomplete
      items={items}
      onSelect={handleOnSelect}
      fuseOptions={{ keys: ["title"] }}
      formatResult={formatResult}
    />
  );
}

export default Search;
