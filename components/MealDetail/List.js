import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem}>
      <Text style={styles.innerText} key={dataPoint}>
        {dataPoint}
      </Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: Colors.accent500,
  },
  innerText: {
    color: Colors.primary600,
  },
});
