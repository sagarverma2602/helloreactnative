import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import collab from './assets/collaboration.svg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text >Hello woerl!</Text>
      {/* <SvgUri
    width="200"
    height="200"
    svgXmlData={collab}
  /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
