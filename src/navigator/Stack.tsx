import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../Main';
import OpacityAnim from '../anim/OpacityAnim';
import ScrollDownAnim from '../anim/ScrollDownAnim';
import ScaleAnim from '../anim/ScaleAnim';
import ColorAnim from '../anim/ColorAnim';
import RotateAnim from '../anim/RotateAnim';
import WidthProcentAnim from '../anim/WidthProcentAnim';
import SpringAnim from '../anim/SpringAnim';
import ScollAnim from '../anim/ScrollAnim';



const Stack = createStackNavigator();




export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="ScollAnim">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="OpacityAnim" component={OpacityAnim} />
        <Stack.Screen name="ScrollDownAnim" component={ScrollDownAnim} />
        <Stack.Screen name="ScaleAnim" component={ScaleAnim} />
        <Stack.Screen name="ColorAnim" component={ColorAnim} />
        <Stack.Screen name="RotateAnim" component={RotateAnim} />
        <Stack.Screen name="WidthProcentAnim" component={WidthProcentAnim} />
        <Stack.Screen name="SpringAnim" component={SpringAnim} />
        <Stack.Screen name="ScollAnim" component={ScollAnim} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}