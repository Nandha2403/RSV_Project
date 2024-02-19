import React from "react";
import "./SearchResult.css";
import { Link } from "react-router-dom";

const SearchResult = ({ result }) => {
  return (
    <div className="search-result">
      <Link to={result.path}>{result.name}</Link>
    </div>
  );
};

export default SearchResult;
