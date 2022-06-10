import React, { createContext } from "react";
import { mockExpensedata } from "./mock";
import dayjs from "dayjs";

export const ExpanceContext = createContext({
  allExpenses: [],
  addExpance: (expance) => {},
  deleteExpance: (id) => {},
  editExpance: (id, expanceUpdated) => {},
  getRecentTotalAmount: () => {},
  getTotalAmount: () => {},
  getRecentExpenses: () => {},
  modalVisible: false,
  setModalVisibility: (modalVisible) => {},
});

export const ExpanceProvider = ({ children }) => {
  const [allExpenses, setAllExpenses] = React.useState([...mockExpensedata]);
  const [modalVisible, setModalVisibility] = React.useState(false);

  const addExpance = (expance) => {
    setAllExpenses([...allExpenses, expance]);
  };

  const deleteExpance = (id) => {
    setAllExpenses(allExpenses.filter((expance) => expance.id !== id));
  };

  const editExpance = (id, expanceUpdated) => {
    setAllExpenses(
      allExpenses.map((expance) =>
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
    return allExpenses.filter((expance) => {
      return dayjs(expance.date).diff(dayjs(Date()), "days") >= -7;
    });
  };

  const getTotalAmount = () => {
    const getRecentTotalAmount = allExpenses.reduce(
      (acc, expance) => acc + expance.amount,
      0
    );
    return getRecentTotalAmount;
  };

  const value = {
    allExpenses,
    addExpance,
    deleteExpance,
    editExpance,
    getRecentTotalAmount,
    getTotalAmount,
    getRecentExpenses,
    modalVisible,
    setModalVisibility,
  };

  return (
    <ExpanceContext.Provider value={value}>{children}</ExpanceContext.Provider>
  );
};
