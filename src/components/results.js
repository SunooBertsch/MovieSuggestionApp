import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";
import axios from "axios";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.query
    };
  }

  componentWillMount() {
    fetch(
      `https://api.themoviedb.org/3/genre/22/movies?api_key=b09e8ebef5593dfec03034ec1ab31d35&language=en-US&include_adult=false&sort_by=created_at.desc`
    )
      .then(resp => {
        console.log("worked!");
        console.log(resp);
      })
      .catch(resp => {
        console.log("Error");
      });
  }
  render() {
    return <Text>Hey</Text>;
  }
}

export default Result;
