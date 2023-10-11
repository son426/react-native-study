import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useRecoilState } from "recoil";
import { expensesState } from "../store/atom";

function AllExpenses() {
  const [expenses, setExpenses] = useRecoilState(expensesState);

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={expenses}
      fallbackText="Expenses가 없음"
    />
  );
}

export default AllExpenses;
