import React from "react";
import { Text, TextInput, View } from "react-native"; //View is primitve element to position/wrap/style
import SearchBar from "./searchbar.js";

const Landing = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 700,
        padding: 20,
        alignSelf: "stretch"
      }}>
      <SearchBar />
    </View>
  );
};

//camel case instead of dashes for object css

export default Landing;
