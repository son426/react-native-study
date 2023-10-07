import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  useFonts({});

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setIsGameOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
    setIsGameOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (isGameOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onRestart={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar />
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/lim.png")}
          resizeMode="contain"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
