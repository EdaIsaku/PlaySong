import { View, Text, StyleSheet } from "react-native";
import { SIZES, COLORS } from "../theme";

export const Progress = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outerProgress}>
        <View style={styles.innerProgress}></View>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>2:53</Text>
        <Text style={styles.time}>4:47</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    width: "100%",
    justifyContent: "space-between",
  },
  timeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  outerProgress: {
    width: "100%",
    height: 8,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.secondaryOpacity,
  },
  innerProgress: {
    width: "50%",
    height: "100%",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.secondary,
  },
  time: {
    color: COLORS.white,
    fontSize: SIZES.base,
  },
});
