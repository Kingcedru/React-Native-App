import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Todo from "./Todo";
import { AntDesign } from "@expo/vector-icons";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [modal, setModal] = useState(false);

  const addTodo = () => {
    setTodos((previous) => [...previous, todo]);
    setTodo("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Tod..."
          style={styles.input}
          placeholderTextColor="white"
          value={todo}
          onChangeText={setTodo}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Todo item={item} setTodos={setTodos} setModal={setModal} />
          )}
          keyExtractor={(item, i) => i}
        />
      </View>
      <Modal visible={modal} animationType="slide">
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
            padding: 20,
            marginBottom: 10,
          }}
        >
          <AntDesign
            onPress={() => setModal(false)}
            style={styles.closeIcon}
            name="close"
            size={24}
            color="white"
          />
          <Text style={styles.editTitle}>Edit Todo</Text>
          <TextInput
            placeholder="Tod..."
            style={styles.input}
            placeholderTextColor="white"
            value={todo}
            onChangeText={setTodo}
          />
          <Button title="Add" onPress={addTodo} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#000",
    height: 1000,
  },
  title: {
    color: "white",
    textAlign: "center",
    paddingBottom: 50,
    paddingHorizontal: 15,
    fontSize: 20,
  },
  inputContainer: {
    gap: 10,
  },
  btn: {},
  input: {
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    padding: 15,
  },
  editTitle: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    PaddingVertical: 20,
  },
  closeIcon: {
    position: "absolute",
    top: 25,
    left: 20,
  },
});
