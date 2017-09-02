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
    this.setState({ exec: true });
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
      let genre = this.state.text;
      let id = "";
      switch (genre) {
        case "Action":
          id = "28";
          break;
        case "Comedy":
          id = "35";
          break;
        case "Horror":
          id = 27;
          break;
        case "Thriller":
          id = "53";
          break;
        case "Sci-Fi":
          id = "878";
          break;
        case "Animation":
          id = "16";
          break;
        case "Western":
          id = "37";
          break;
        case "Family":
          id = "10751";
          break;
        case "Mystery":
          id = "9648";
          break;
        case "Romance":
          id = "10749";
          break;
        case "Drama":
          id = "18";
          break;
      }
      return <Result query={id} style={{ height: 600 }} />;
    }
  }
}
export default SearchBar;
