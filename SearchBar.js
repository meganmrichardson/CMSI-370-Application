// Gather Application - Search Explore
// Authors:
// Srikar Dabbara, Nick Morgan, Megan Richardson, Josh Seaman
// !!Work Breakdown!!
// Creator: Megan Richardson

import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    width: "100%",
    border: "none",
    padding: "0.5rem",
    borderRadius: 10
  };

  return (
    <input style={BarStyling} placeholder={"Search for Communities & Users"} />
  );
};

export default SearchBar;
