
import {
  SafeAreaView,
  StyleSheet,
 
} from "react-native";
import Constants from 'expo-constants'
import { FlatList, Image, Button } from "react-native";
import ImageSlider from "./components/ImageSlider";
import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";

const height=Constants.statusBarHeight
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageSlider />
      <StatusBar style="default"/>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    marginTop:height,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
