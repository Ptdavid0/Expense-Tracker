import React, { createContext } from "react";
import { mockExpensedata } from "./mock";

const ExpanceContext = createContext({
  allExpences: [...mockExpensedata],
  addExpance: (expance) => {},
  deleteExpance: (id) => {},
  editExpance: (id, expanceUpdated) => {},
  getRecentTotalAmount: () => {},
});

export const ExpanceProvider = ({ children }) => {
  const [allExpences, setAllExpences] = React.useState([]);

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
    return allExpences.reduce((acc, curr) => acc + curr.amount, 0);
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
