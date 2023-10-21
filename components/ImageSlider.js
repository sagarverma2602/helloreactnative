import { View, Text, StyleSheet, FlatList, SafeAreaView, SafeAreaViewBase ,Animated} from "react-native";
import { useState,useRef } from "react";
import React from "react";
import collab1 from "../assets/collab.png";
import collab2 from "../assets/collab2.png";
import ImageSlides from "./ImageSlides";
import Paginator from "./Paginator";

export default function ImageSlider() {
  const scrollX=useRef(new Animated.Value(0)).current
  const [currentIndex,setCurrentIndex]=useState(0)
  const slideRef=useRef(null)
  
  const viewableItemChanged=useRef(({viewableItems})=>{
    setCurrentIndex(viewableItems[0].index)
  }).current

  const viewConfig=useRef({viewAreaCoveragePercentThreshold:50}).current
  const slides = [
    {
      id: 1,
      title: "first",
      desc: "first page to show",
      img: collab1,
      btn:'Next'
    },
    {
      id: 2,
      title: "Second",
      desc: "Second page to show",
      img: collab2,
      btn:'Get Started'
    },
  ];
  return (
    <View style={styles.container}>
      
        <Paginator item={slides}/>
        <View style={{flex:3}}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <ImageSlides item={item} 
          />}
          horizontal
          showHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item)=>item.id}
          onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{useNativeDriver:false})}
          onViewableItemsChanged={viewableItemChanged}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent:'center'
  },
});
