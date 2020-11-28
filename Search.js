import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { Text, View } from "react-native";
import "bootstrap/dist/css/bootstrap.min.css";

const communityList = [
  "LGBTQ+",
  "Native American",
  "Person with a Disability",
  "African American",
  "Asian Pacific Islander",
  "Latino/a/x Chicano/a/x",
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
    <View style={{ justifyContent: "center", flexDirection: "row", flex: 1 }}>
      <View style={{ flex: 1 }} />
      <View style={{ flex: 2, textAlign: "center" }}>
        <Text style={{ color: "#74c69d", fontSize: 20, margin: 20 }}>
          Search for Communities & Users
        </Text>
        <SearchBar input={input} onChange={updateInput} />
        <Text>{filteredCommunityList}</Text>
        <Text>{input}</Text>
      </View>
      <View style={{ flex: 1 }} />
    </View>
  );
};

export default Search;
