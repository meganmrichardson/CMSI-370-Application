import Autosuggest from "react-autosuggest";
import React from "react";
import "./Suggest.css";

// add to readme!
// npm install react-autosuggest --save

const suggestions = [
  { text: "LGBTQ+" },
  { text: "Native Americans" },
  { text: "People Living with Disabilities" },
  { text: "BIPOC" },
  { text: "Asian Pacific Islander" },
  { text: "¡Comunidad!" },
  { text: "Trans Pride!" },
  { text: "Neurodivergents Unite" },
  { text: "Josh Seaman" },
  { text: "Megan Richardson" },
  { text: "Nick Morgan" },
  { text: "Srikar Dabbara" },
  { text: "Jane Doe" },
  { text: "Johnny Appleseed" },
  { text: "John Doe" }
];

// finds suggestions based on input value
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : suggestions.filter(
        suggestion =>
          suggestion.text.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// changes the input value when suggestion is clicked
const changeInputValue = suggestion => suggestion.text;
const renderSuggestion = suggestion => <div>{suggestion.text}</div>;

class Suggest extends React.Component {
  constructor() {
    super();

    // must provide an input value
    // suggestions msut be provided to the Autosuggest (intitally empty)
    this.state = {
      value: "",
      suggestions: []
    };
  }

  // onChange updates the input value
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest calls this function to update suggestions
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass props to the input
    const inputProps = {
      placeholder: "Search for Communities & Users",
      value,
      onChange: this.onChange
    };

    // render
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        changeInputValue={changeInputValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Suggest;
