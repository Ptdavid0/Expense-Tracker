import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import ExpenseList from "../components/ExpenseList";
import SumOfExpenses from "../components/SumOfExpenses";
import { ExpanceContext } from "../store/expanceContext";

const AllExpense = () => {
  const { allExpenses, getTotalAmount } = useContext(ExpanceContext);

  return (
    <View style={styles.container}>
      <View style={styles.sumContainer}>
        <SumOfExpenses amount={getTotalAmount()} title={"Total Spent"} />
      </View>
      <View style={styles.listContainer}>
        <ExpenseList expenseData={allExpenses} />
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
  },
  listContainer: {
    flex: 2,
  },
});

export default AllExpense;
