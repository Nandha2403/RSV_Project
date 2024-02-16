import React from "react";
import "./SearchResultsList.css";
import SearchResult from "./SearchResult";

const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((el, id) => (
        <SearchResult  result={el} key={id}/>
      ))}
    </div>
  );
};

export default SearchResultsList;
