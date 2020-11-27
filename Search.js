import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CommunityList from "./CommunityList";

const Search = props => {
  const [input, setInput] = useState("");
  const [communityListDefault, setCommunityListDefault] = useState();
  const [communityList, setCommunityList] = useState();

  const fetchData = async () => {
    return await fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => {
        setCommunityList(data);
        setCommunityListDefault(data);
      });
  };

  const updateInput = async input => {
    const filtered = communityListDefault.filter(community => {
      return community.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setCommunityList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Community List</h1>
      <SearchBar input={input} onChange={updateInput} />
      <CommunityList communityList={communityList} />
    </>
  );
};

export default Search;
