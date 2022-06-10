import React, { useContext } from "react";
import { View, StyleSheet, Button } from "react-native";
import ExpenseList from "../components/ExpenseList";
import SumOfExpenses from "../components/SumOfExpenses";
import { ExpanceContext } from "../store/expanceContext";

const RecentExpense = () => {
  const { getRecentTotalAmount, getRecentExpenses } =
    useContext(ExpanceContext);

  return (
    <View style={styles.container}>
      <View style={styles.sumContainer}>
        <SumOfExpenses
          amount={getRecentTotalAmount()}
          title={"Spent recently"}
        />
      </View>
      <View style={styles.listContainer}>
        <ExpenseList expenseData={getRecentExpenses()} />
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
    flex: 1.5,
    width: "100%",
  },
});

export default RecentExpense;
