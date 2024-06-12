import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Button,
  Pressable,
} from "react-native";
import React from "react";

export default function App() {
  return (
    <View>
      <StatusBar barStyle="default" />
      <Image
        style={{ width: 100, height: 50 }}
        source={require("./assets/icon.png")}
      />
      <ImageBackground
        style={{ height: 150 }}
        source={require("./assets/icon.png")}
      >
        <Text>Hello World!</Text>
      </ImageBackground>
      <Button
        title="Click me"
        color="#000"
        accessibilityLabel="Click me button"
        onPress={() => console.log("clicked")}
      />
      <Pressable
        style={{ padding: 23, backgroundColor: "blue" }}
        onPress={() => console.log("press me")}
      >
        <Text style={{ color: "white" }}>Press me</Text>
      </Pressable>
    </View>
  );
}
