import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    width: "100%",
    background: "white",
    border: "none",
    padding: "0.5rem"
  };

  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Search"}
      onChange={e => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
