import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useRecoilState } from "recoil";
import { expensesState } from "../store/atom";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const [expenses, setExpenses] = useRecoilState(expensesState);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={recentExpenses}
      fallbackText="지난 7일간 expenses가 없음"
    />
  );
}

export default RecentExpenses;
