import axios from "axios";

const firebaseUrl = " ";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    firebaseUrl + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(firebaseUrl + "/expenses.json");
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export async function updateExpense(id, expenseData) {
  axios.put(firebaseUrl + `/expenses/${id}.json`, expenseData);
}

export async function deleteExpense(id) {
  return axios.delete(firebaseUrl + `/expenses/${id}.json`);
}
