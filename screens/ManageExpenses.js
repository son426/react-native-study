import { StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import CustomButton from "../ui/CustomButton";
import { useRecoilState } from "recoil";
import { expensesStateWithActions } from "../store/atom";

function ManageExpenses({ route, navigation }) {
  const [expenses, setExpenses] = useRecoilState(expensesStateWithActions);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    const newExpenses = expenses.filter((e) => e.id !== editedExpenseId);
    setExpenses(newExpenses);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    const NEW_SAMPLE = {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-07-14"),
    };
    const UPDATE_SAMPLE = {
      description: "UPDATED",
      amount: 59.99,
      date: new Date("2021-07-14"),
    };

    if (isEditing) {
      //수정로직
      const newExpenses = expenses.map((e) =>
        e.id === editedExpenseId ? { id: editedExpenseId, ...UPDATE_SAMPLE } : e
      );
      setExpenses(newExpenses);
    } else {
      //추가로직
      const newExpenses = [...expenses, NEW_SAMPLE];
      setExpenses(newExpenses);
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <CustomButton style={styles.button} mode="flat" onPress={cancelHandler}>
          취소
        </CustomButton>
        <CustomButton
          style={styles.button}
          mode="flat"
          onPress={confirmHandler}
        >
          확인
        </CustomButton>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
