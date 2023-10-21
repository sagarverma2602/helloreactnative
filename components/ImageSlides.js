import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Button,
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
        <Button color='#5A189A' title={item.btn} style={styles.btn}></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    btn:{
      width:'50', 
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
