import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const communityList = [
  "LGBTQ+",
  "Native American",
  "Person with a Disability",
  "African American",
  "Asian American",
  "Hispanic",
  "Josh Seaman"
];

const Search = props => {
  const [input, setInput] = useState("");
  const [filteredCommunityList, setCommunityList] = useState();

  const updateInput = input => {
    const filtered = communityList.filter(community => {
      return community.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setCommunityList(filtered);
  };

  return (
    <>
      <h1>Search for Communities:</h1>
      <SearchBar input={input} onChange={updateInput} />
      <text>{filteredCommunityList}</text>
      <text>{input}</text>
    </>
  );
};

export default Search;
