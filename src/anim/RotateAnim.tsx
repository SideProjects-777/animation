import React, { Component } from "react";
import { StyleSheet, View, Animated, TouchableWithoutFeedback, Text } from "react-native";

interface State {
  animation: Animated.Value;
}

export default class RotateAnim extends Component<{}, State> {
  state: State = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
        toValue: 360,
        duration: 1500,
        useNativeDriver:true
      }).start(() => {
        this.state.animation.setValue(0);
      })
  }



  render() {
    const rotateInterpolate = this.state.animation.interpolate({
        inputRange: [0, 360],
        outputRange: ["0deg", "-1080deg"],
        //outputRange: ["0deg", "180deg"],
        // outputRange: ["0deg", "-360deg"],
        // outputRange: ["0deg", "1080deg"],
      });
  
      const animatedStyles = {
        transform: [
          { rotateX: rotateInterpolate },
          // { rotateX: rotateInterpolate },
          // { rotateY: rotateInterpolate },
        ]
      }

    return (
        
        <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text>Hello Rotate!</Text>
          </Animated.View>
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
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  }
});
