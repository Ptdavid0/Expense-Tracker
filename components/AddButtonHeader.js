import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ModalAddExpense from "./ModalAddExpense";
import { ExpanceContext } from "../store/expanceContext";

const AddButtonHeader = () => {
  const { setModalVisibility } = React.useContext(ExpanceContext);
  return (
    <View>
      <ModalAddExpense />
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.buttonContainerPressed]
            : styles.buttonContainer
        }
        onPress={() => {
          setModalVisibility(true);
        }}
      >
        <Ionicons name="add-circle" size={40} color="#3e3e3e" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginRight: 24,
  },
  buttonContainerPressed: {
    opacity: 0.5,
  },
});

export default AddButtonHeader;
