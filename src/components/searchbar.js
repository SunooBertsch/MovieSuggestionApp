import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault();
  }
  render(){
    return (
      <Text>
        Hello
      </Text>
    )
  }
}
export default SearchBar;



