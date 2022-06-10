import React, { createContext } from "react";
import { mockExpensedata } from "./mock";

export const ExpanceContext = createContext({
  allExpences: [],
  addExpance: (expance) => {},
  deleteExpance: (id) => {},
  editExpance: (id, expanceUpdated) => {},
  getRecentTotalAmount: () => {},
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
  };

  return (
    <ExpanceContext.Provider value={value}>{children}</ExpanceContext.Provider>
  );
};
