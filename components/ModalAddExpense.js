import React from "react";
import {
  View,
  Modal,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from "react-native";
import { ExpanceContext } from "../store/expanceContext";
import uuid from "react-native-uuid";
import dayjs from "dayjs";

const ModalAddExpense = () => {
  const { setModalVisibility, modalVisible, addExpance } =
    React.useContext(ExpanceContext);
  const [expense, setExpense] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const handleAddExpense = () => {
    addExpance({
      id: uuid.v4(),
      description: expense,
      amount: parseFloat(amount),
      date: dayjs(new Date()),
    });
    if (expense && amount) {
      setModalVisibility(false);
      setExpense("");
      setAmount("");
    }
  };

  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>New Expense</Text>
          <View style={styles.descriptionInputContainer}>
            <TextInput
              placeholder="Description"
              style={styles.input}
              onChangeText={(text) => setExpense(text)}
              value={expense}
            />
          </View>
          <View style={styles.amountInputContainer}>
            <TextInput
              placeholder="Amount of the expense"
              style={styles.input}
              keyboardType="decimal-pad"
              onChangeText={(number) => setAmount(number)}
              value={amount}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              title="Cancel"
              onPress={() => {
                setModalVisibility(false);
              }}
            />
            <Button title="Save" onPress={handleAddExpense} />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "65%",
    width: "100%",
    marginTop: "auto",
    backgroundColor: "#afafaf",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
    color: "#000",
  },
  descriptionInputContainer: {
    marginBottom: 20,
  },
  amountInputContainer: {
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  button: {
    width: "50%",
    height: 50,
    backgroundColor: "#3e3e3e",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    height: 50,
    fontSize: 18,
    backgroundColor: "#fff",
  },
});

export default ModalAddExpense;
