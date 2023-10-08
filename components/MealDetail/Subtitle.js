import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: Colors.accent500,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 6,
  },
});
