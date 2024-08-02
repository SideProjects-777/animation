import React, {Component} from "react";
import {StyleSheet, View, Animated, TouchableWithoutFeedback, Text, ScrollView} from "react-native";

interface State {
    animation : Animated.Value;
}

export default class ScollAnim extends Component < {},State > {
    state: State = {
        animation: new Animated.Value(1)
    };

    render() {

        const backgroundInterpolate = this.state.animation.interpolate({
            inputRange: [0, 3000],
            outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
            useNativeDriver:true
          });
      
          const backgroundStyle = {
            backgroundColor: backgroundInterpolate
          }
        return (
            <View style={styles.container}>
            <ScrollView
              scrollEventThrottle={16}
              onScroll={Animated.event([
                {
                  nativeEvent: {
                    contentOffset: {
                      y: this.state.animation
                    },
                  }
                }
              ],null)}
            >
              <Animated.View style={[styles.content, backgroundStyle]} />
            </ScrollView>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      height: 3000,
    }
  });