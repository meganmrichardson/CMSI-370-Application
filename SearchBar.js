import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    width: "20rem",
    background: "lightgreen",
    border: "none",
    padding: "0.5rem"
  };
  // <form
  //   class="example"
  //   action="/action_page.php"
  //   style="margin:atuo;max-width:300px"
  // >
  //   <input type="text" placeholder="Search.." name="search2">
  //   <button type="submit">
  //     <i class="fa fa-search"></i>
  //   </button>
  // </form>
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"search community"}
      onChange={e => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
