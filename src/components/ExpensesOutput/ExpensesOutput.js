import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 69.99,
    date: new Date("2021-12-30"),
  },
  {
    id: "e3",
    description: "A pair of bananas",
    amount: 5.99,
    date: new Date("2021-12-25"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 5.99,
    date: new Date("2022-1-12"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 10.99,
    date: new Date("2022-4-3"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 69.99,
    date: new Date("2021-12-30"),
  },
  {
    id: "e8",
    description: "A pair of bananas",
    amount: 5.99,
    date: new Date("2021-12-25"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 5.99,
    date: new Date("2022-1-12"),
  },
  {
    id: "e10",
    description: "Another book",
    amount: 10.99,
    date: new Date("2022-4-3"),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
})