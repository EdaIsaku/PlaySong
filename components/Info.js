import { View, Text, StyleSheet } from "react-native";
import { SIZES, COLORS } from "../theme";

export const Info = ({ name, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: "space-around",
    alignItems: "center",
  },
  name: {
    fontSize: SIZES.h1,
    color: COLORS.white,
    letterSpacing: -0.5,
  },
  title: {
    fontSize: SIZES.h3,
    color: COLORS.gray,
  },
});
