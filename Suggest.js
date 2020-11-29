import Autosuggest from "react-autosuggest";
import React from "react";

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
  { text: "Srikar Dabbara" }
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

// "use your imagination to render suggestions"
const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

class Suggest extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
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

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Search for Communities & Users",
      value,
      onChange: this.onChange
    };

    // render it
    return (
      <Autosuggest
        style={{
          border: "none",
          font: "Avenir"
        }}
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
