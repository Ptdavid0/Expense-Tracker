import React, { createContext } from "react";
import { mockExpensedata } from "./mock";
import dayjs from "dayjs";

export const ExpanceContext = createContext({
  allExpences: [],
  addExpance: (expance) => {},
  deleteExpance: (id) => {},
  editExpance: (id, expanceUpdated) => {},
  getRecentTotalAmount: () => {},
  getTotalAmount: () => {},
  getRecentExpenses: () => {},
});

export const ExpanceProvider = ({ children }) => {
  const [allExpences, setAllExpences] = React.useState([...mockExpensedata]);

  const addExpance = (expance) => {
    setAllExpences([...allExpences, expance]);
  };

  const deleteExpance = (id) => {
    setAllExpences(allExpences.filter((expance) => expance.id !== id));
  };

  const editExpance = (id, expanceUpdated) => {
    setAllExpences(
      allExpences.map((expance) =>
        expance.id === id ? { ...expance, ...expanceUpdated } : expance
      )
    );
  };
  const getRecentTotalAmount = () => {
    return getRecentExpenses().reduce(
      (acc, expance) => acc + expance.amount,
      0
    );
  };

  const getRecentExpenses = () => {
    return allExpences.filter((expance) => {
      return dayjs(expance.date).diff(dayjs(Date()), "days") >= -7;
    });
  };

  const getTotalAmount = () => {
    const getRecentTotalAmount = allExpences.reduce(
      (acc, expance) => acc + expance.amount,
      0
    );
    return getRecentTotalAmount;
  };

  const value = {
    allExpences,
    addExpance,
    deleteExpance,
    editExpance,
    getRecentTotalAmount,
    getTotalAmount,
    getRecentExpenses,
  };

  return (
    <ExpanceContext.Provider value={value}>{children}</ExpanceContext.Provider>
  );
};
