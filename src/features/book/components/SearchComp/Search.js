import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Search() {
  <ReactSearchAutocomplete
    items={items}
    onSearch={handleOnSearch}
    onHover={handleOnHover}
    onSelect={handleOnSelect}
    onFocus={handleOnFocus}
    autoFocus
    formatResult={formatResult}
  />;
}

export default Search;
