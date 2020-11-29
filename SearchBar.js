import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    width: "100%",
    background: "DDF0E7",
    border: "none",
    padding: "0.5rem",
    borderRadius: 15
  };

  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Search for Communities & Users"}
      // this line below probs has issue related to async call that i removed
      // onChange={e => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
