import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SumOfExpenses = ({ title = "Test" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>
        <Text style={styles.amountSymbol}>$</Text>
        290.50
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#afafaf",
  },
  amount: {
    fontSize: 60,
    color: "#000000",
  },
  amountSymbol: {
    fontSize: 30,
    color: "#afafaf",
  },
});

export default SumOfExpenses;
