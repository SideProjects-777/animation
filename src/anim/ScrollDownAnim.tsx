import React, { Component } from "react";
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";

interface State {
  animation: Animated.Value;
}

export default class ScrollDownAnim extends Component<{}, State> {
  state: State = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
        toValue: 120,
        duration: 1500,
        useNativeDriver:true
      }).start(() => {
        Animated.timing(this.state.animation, {
            toValue: 0,
            duration: 1500,
            useNativeDriver:true
        }).start();
      });
  }

  renderBack = () => {
    Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver:true
    }).start(() => this.renderFront());
  }

  renderFront = () => {
    Animated.timing(this.state.animation, {
        toValue: 120,
        duration: 1500,
        useNativeDriver:true
    }).start(() => this.renderBack());
  }

  render() {
    const animatedStyles = {
        transform: [
        {
            translateX: this.state.animation
        },          
        { 
            translateY: this.state.animation,
        }
        ]
      }

    return (
        
        <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.renderFront}>
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
