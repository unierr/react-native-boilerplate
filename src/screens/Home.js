import React from 'react';
import { View , Text } from 'react-native';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Hello World</Text>
            </View>
        )
    }
}