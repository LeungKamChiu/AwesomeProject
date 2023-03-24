import React from 'react';
import {View} from 'react-native';

const SizeBox = (props) => {
	return (
		<View style={{width:props.w,height:props.h}}></View>
	);
}

export default SizeBox;