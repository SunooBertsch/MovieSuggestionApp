import React, { Component } from "react";
import { Text, TextInput, View, WebView } from "react-native";
import axios from "axios";
import KEYS from "../../keys";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }
  youtubeSearch(title) {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${KEYS.youtube}&part=snippet&type=video&maxResults=1&q=${title}`
    )
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        console.log(json.items[0].snippet.title);
      });
  }
  tmdbMovieSuggestion() {
    console.log(KEYS.youtube);
    fetch(
      `https://api.themoviedb.org/3/genre/${this.props
        .query}/movies?api_key=${KEYS.imdb}&language=en-US&include_adult=false&sort_by=created_at.desc`
    )
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        title =
          json.results[Math.floor(Math.random() * 20) + 1].title +
          "+movie+trailer";
        title = title.split(" ").join("+");
        this.youtubeSearch(title);
      });
  }
  componentWillMount() {
    let title = "";
    this.tmdbMovieSuggestion();
  }
  render() {
    return (
      <WebView
        source={{ uri: "https://youtube.com/" }}
        style={{ height: "100%" }}
      />
    );
  }
}

export default Result;
