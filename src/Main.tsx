import React, { Component } from 'react';
import {View, StyleSheet, BackHandler, ScrollView, Text} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface MainProps  {
    navigation: any;
}

interface MainScreenComponent {

}

const pages = [
    ""
];

class Main  extends Component<MainProps, MainScreenComponent> {
    
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {       
        return (
            <SafeAreaProvider>
                <Text>Hello World</Text>
            </SafeAreaProvider>
        );
    }
}





export default Main;