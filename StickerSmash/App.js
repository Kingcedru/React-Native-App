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
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View>
      <StatusBar barStyle="default" />
      <Text>Hello world</Text>
      <Image
        style={{ width: 100, height: 50 }}
        source={require("./assets/icon.png")}
      />
      {/* <Button title="Open Modal" onPress={() => setModal(true)} />
      <Modal visible={modal} animationType="slide">
        <View>
          <Text>This is a modal</Text>
          <Button title="Close Modal" onPress={() => setModal(false)} />
        </View>
      </Modal> */}
      <TextInput
        placeholder="Write here..."
        style={{ borderWidth: 2, borderColor: "red", width: "100%" }}
        value={text}
        onChangeText={setText}
      />
      <Text>{text}</Text>
    </View>
  );
}
