import axios from "axios";

const SERVER_URL = "http://localhost:3000";

export async function storeExpense(expenseData) {
  return axios.post(`${SERVER_URL}/api/`, expenseData);
}

export async function fetchExpenses() {
  const response = axios.get(`${SERVER_URL}/api/`);

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
