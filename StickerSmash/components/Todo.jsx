import { View, Text, StyleSheet } from "react-native";
import { EvilIcons, Feather } from "@expo/vector-icons";
import React from "react";

export default function Todo({ item }) {
  return (
    <View style={styles.todo}>
      <Text style={{ color: "white", fontSize: 15 }}>{item}</Text>
      <View style={styles.todo}>
        <EvilIcons name="trash" size={24} color="red" />
        <Feather name="edit" size={24} color="green" style={{ marginTop: 3 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    marginVertical: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 13,
    borderRadius: 5,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
