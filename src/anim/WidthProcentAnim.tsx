import React, {Component} from "react";
import {StyleSheet, View, Animated, TouchableWithoutFeedback, Text} from "react-native";

interface State {
    animation : Animated.Value;
}

export default class WidthProcentAnim extends Component < {},
State > {
    state: State = {
        animation: new Animated.Value(150)
    };

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 300,
            duration: 1500,
            useNativeDriver:true
          }).start(() => {
            this.state.animation.setValue(150);
          });
    }

    render() {
        const widthInterpolate = this
            .state
            .animation
            .interpolate({
                inputRange: [
                    0, 1
                ],
                outputRange: ["20%", "50%"]
            });

        const heightInterpolate = this
            .state
            .animation
            .interpolate({
                inputRange: [
                    0, 1
                ],
                outputRange: ["20%", "30%"]
            });

            const animatedStyles = {
                width: this.state.animation,
                height: this.state.animation,
            }

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box, animatedStyles]}/>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    box: {
        backgroundColor: "tomato"
    }
});
