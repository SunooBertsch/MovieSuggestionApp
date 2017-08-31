import React, { Component } from "react";
import { TextInput, Text, View } from "react-native";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(text) {
    this.setState({ text });
    console.log(this.state.text);
  }
  handleSubmit() {
    console.log(this.state.text);
  }
  render() {
    return (
      <View>
        <TextInput
          multiline={false}
          autoCorrect={false}
          placeholder="Enter a genre"
          onSubmitEditing={this.handleSubmit}
          onChangeText={this.handleChange}
          value={this.state.value}
        />
      </View>
    );
  }
}
export default SearchBar;
