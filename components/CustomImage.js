import { View, StyleSheet, Image } from "react-native";
import { IMAGES } from "../screens/constants";
import { SIZES, COLORS } from "../theme";

export const CustomImage = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.flame} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: "45%",
    borderRadius: SIZES.radius,
    shadowColor: COLORS.white,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: SIZES.radius,
    height: "100%",
    width: "100%",
  },
});
