import React from "react";
import { FlatList } from "react-native";
import ExpenseCard from "./ExpenseCard";

const ExpenseList = ({ expenseData }) => {
  return (
    <FlatList
      data={expenseData}
      renderItem={({ item }) => <ExpenseCard expense={item} />}
    />
  );
};

export default ExpenseList;
