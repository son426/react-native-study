import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onRestart }) {
  return (
    <View style={styles.rootContainer}>
      <Title>게임오버</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          정답인 <Text style={styles.highlight}>{userNumber}</Text> 맞추는 데에{" "}
          <Text style={styles.highlight}>{roundsNumber}</Text>라운드가 걸렸다.{" "}
        </Text>
      </View>
      <PrimaryButton onPress={onRestart}>새로운 게임 시작</PrimaryButton>
    </View>
  );
}
export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary600,
    fontWeight: "bold",
  },
});
