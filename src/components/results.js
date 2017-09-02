import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";
import axios from "axios";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }

  componentWillMount() {
    let title = "";
    fetch(
      `https://api.themoviedb.org/3/genre/${this.props
        .query}/movies?api_key=b09e8ebef5593dfec03034ec1ab31d35&language=en-US&include_adult=false&sort_by=created_at.desc`
    )
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        title = json.results[Math.floor(Math.random() * 20) + 1].title;
        console.log(title);
      });
  }
  render() {
    return (
      <Text>
        ${this.state.result}
      </Text>
    );
  }
}

export default Result;
