import React, { Component } from "react";
import { TextInput, Text, View } from "react-native";
import Result from "./results";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      exec: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(text) {
    this.setState({ text });
    console.log(this.state.text);
  }
  handleSubmit() {
    this.state.exec = true;
    this.render();
  }
  render() {
    if (this.state.exec === false) {
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
    } else {
      return <Result query={this.state.text} />;
    }
  }
}
export default SearchBar;
