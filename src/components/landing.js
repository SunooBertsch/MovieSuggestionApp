import React from 'react';
import { Text, TextInput, View } from 'react-native'; //View is primitve element to position/wrap/style
import SearchBar from './searchbar.js';


const Landing = (props) => {
	const { textStyle, textBar, viewStyle } = styles;

	return (
	<View style ={viewStyle}> 
		<SearchBar />
	</View>	
	);
};

//camel case instead of dashes for object css
const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	},
};

export default Landing;