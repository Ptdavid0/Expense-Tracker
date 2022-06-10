import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ExpenseCard = ({ expense }) => {
  return (
    <View style={styles.container}>
      <View>
        <Ionicons name="arrow-down-circle-outline" size={30} color="#ff2a00" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{expense.description}</Text>
        <Text style={styles.subtitle}>{expense.date}</Text>
      </View>
      <View>
        <Text style={styles.amount}>- $ {expense.amount.toFixed(0)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginVertical: 8,
    elevation: 5,
    backgroundColor: "#3e3e3e",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#3d3d3d",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  amount: {
    fontSize: 20,
    color: "#ff2a00",
    fontWeight: "bold",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 10,
    color: "#afafaf",
  },
});
export default ExpenseCard;
