import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useEffect, useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function numberResetHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "숫자가 유효하지 않음",
        "1과 99 사이의 숫자를 입력해주세요.",
        [{ text: "확인", style: "destructive", onPress: numberResetHandler }]
      );
      return;
    }

    // 유효성 체크 성공했을 때
    console.log("유효성 체크 성공!!");
    onPickNumber(chosenNumber);
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.rootContainer}>
          <Title style={styles.title}>숫자 맞추기</Title>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={numberResetHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    padding: 24,
  },
  inputContainer: {
    padding: 16,
    marginTop: 20,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#4e0329",
    elevation: 6, // 안드로이드 전용
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: Platform.select({ ios: 2, android: 1 }),
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
  },
});
