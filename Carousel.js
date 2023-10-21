import React, { useState } from "react";
import { FlatList, Image, Button, View ,StyleSheet,Text} from "react-native";
import collaboration from "./assets/collab.png";
import collaboration2 from "./assets/collab2.png";
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: collaboration,
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: collaboration2,
      backgroundColor: '#febe29',
    },
  ]

  export default class Carousel extends React.Component {
    state = {

      showRealApp: false
    }
    _renderItem = ({ item }) => {
      return (
        <View style={styles.slide}>
          <Text style={styles.title}>{item.title}</Text>
          {/* <Image source={item.image} /> */}
          <Text style={styles.text}>{item.text}</Text>
        </View>
      );
    }
    _onDone = () => {
      // User finished the introduction. Show real app through
      // navigation or simply by controlling state
      this.setState({ showRealApp: true });
    }
    render() {
      if (this.state.showRealApp) {
        return <App />;
      } else {
        return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
      }
    }
  }

const styles=StyleSheet.create({
    container1:{
        flex: 1,
        backgroundColor: "#fff",
        top:'15%',
        alignItems: "center",
        height:"30px",      
        
      },
    slide:{
      alignItems: "center",
      top:'15%',

    },
    img:{
        width:300,
        height:300,
    }
})
