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
import TodoList from "./components/TodoList";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View>
      <TodoList />
    </View>
  );
}
