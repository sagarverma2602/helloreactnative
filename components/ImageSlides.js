import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Button,
  Pressable,
  TouchableOpacity,
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
        {/* <Button  title={item.btn} style={styles.btn} /> */}
        <TouchableOpacity onPress={() => {/* do this */}}>
        <View style={{
            backgroundColor: '#274C77',
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: 10
          }}
        >
          <Text style={{ color: 'white' ,fontSize:22,paddingVertical:5,width:200,textAlign:'center'}}>{item.btn}</Text>
        </View>
</TouchableOpacity>
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
    fontSize:28,
    color: '#274C77',
    
    
    },
    btntext:{
      color:'#fff',
      fontSize:22,
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
