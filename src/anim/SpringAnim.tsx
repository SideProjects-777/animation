import React, {Component} from "react";
import {StyleSheet, View, Animated, TouchableWithoutFeedback, Text} from "react-native";

interface State {
    animation : Animated.Value;
}

export default class SpringAnim extends Component < {},State > {
    state: State = {
        animation: new Animated.Value(1)
    };

    startAnimation = () => {
        this.state.animation.addListener(({ value }) => {
            console.log(value);
        })
        Animated.spring(this.state.animation, {
            toValue: 4,
            friction: 3,
            tension: 210,
            useNativeDriver:true,
          }).start(() => {
            Animated.timing(this.state.animation, {
              toValue: 1,
              duration: 100,
              useNativeDriver:true,
            }).start();
          });
    }

    render() {
        const animatedStyle = {
            transform: [
              { scale: this.state.animation}
            ]
          }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box, animatedStyle]} />
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    box: {
      width: 50,
      height: 50,
      backgroundColor: "tomato",
    }
});
