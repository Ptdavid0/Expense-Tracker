import React from "react";
import { View, StyleSheet } from "react-native";
import ExpenseList from "../components/ExpenseList";
import SumOfExpenses from "../components/SumOfExpenses";

const AllExpense = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sumContainer}>
        <SumOfExpenses />
      </View>
      <View style={styles.listContainer}>
        <ExpenseList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sumContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  listContainer: {
    flex: 2,
    backgroundColor: "green",
  },
});

export default AllExpense;
