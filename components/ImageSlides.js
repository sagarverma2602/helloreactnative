import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Button,
  Pressable,
} from "react-native";
import React from "react";

export default function ImageSlides({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.img}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <Pressable color='#5A189A' title={item.btn} style={styles.btn}><Text style={styles.btntext}>Next</Text></Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    btn:{
      alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  desc: {
    fontWeight: "300",
    color: "#62656b",
    paddingHorizontal: 4,
    textAlign: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 29,
    marginBottom: "10",
    color: "#493d8a",
    textAlign: "center",
  },
});
