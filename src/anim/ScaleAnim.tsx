import React, { Component } from "react";
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";

interface State {
  animation: Animated.Value;
}

export default class ScaleAnim extends Component<{}, State> {
  state: State = {
    animation: new Animated.Value(1),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
        toValue: 2,
        duration: 1500,
        useNativeDriver:true
      }).start(() => {
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 1500,
            useNativeDriver:true
          }).start();
      });
  }



  render() {
    const animatedStyles = {
        transform: [          
        { 
            //scale: this.state.animation
            //scaleX: this.state.animation
            scaleY: this.state.animation
        }
        ]
      }

    return (
        
        <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
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
