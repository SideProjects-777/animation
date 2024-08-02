import React, { Component } from 'react';
import {View, StyleSheet, BackHandler, ScrollView, Text} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ListItem } from "@react-native-material/core";
import { MaterialIcons, Entypo} from '@expo/vector-icons';

interface MainProps  {
    navigation: any;
}

interface MainScreenComponent {

}

const pages = [
    "OpacityAnim",
    "ScrollDownAnim",
    "ScaleAnim",
    "ColorAnim",
    "RotateAnim",
    "WidthProcentAnim",
    "SpringAnim",
    "ScollAnim",
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
                {pages.map((item, key) => (
                    <ListItem
                        key={key}
                        title={item}
                        leading={<MaterialIcons name="animation" size={24} color={'black'}/>}
                        trailing={props => <Entypo name="chevron-right" {...props} />}
                        onPress={() => this.props.navigation.navigate(item)}              
                        
                    />
                ))}
            </SafeAreaProvider>
        );
    }
}





export default Main;