import { StyleSheet, Text, View } from "react-native";

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    padding: 8,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  detailItem: {
    flex: 1,
    marginHorizontal: 4,
    fontSize: 12,
    textAlign: "center",
  },
});
