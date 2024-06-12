import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Button,
  Pressable,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
        onPress={() => console.log("press me blue")}
      >
        <Text style={{ color: "white" }}>Press me</Text>
      </Pressable>
      <TouchableOpacity
        style={{ padding: 23, backgroundColor: "red" }}
        onPress={() => console.log("press me red")}
      >
        <Text style={{ color: "white" }}>Hello World!</Text>
      </TouchableOpacity>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        value={isEnabled}
        onValueChange={toggleSwitch}
      />
    </View>
  );
}
