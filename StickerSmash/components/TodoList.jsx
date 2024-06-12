import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

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
          renderItem={({ item }) => <Todo item={item} />}
          keyExtractor={(item, i) => i}
        />
      </View>
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
});
