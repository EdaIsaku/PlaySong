import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../theme";

export const Favourites = ({ heartIcon, handlePress }) => {
  return (
    <TouchableOpacity style={styles.favouritesContainer} onPress={handlePress}>
      <AntDesign name={heartIcon} size={30} color={COLORS.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favouritesContainer: {
    width: "100%",
    alignItems: "flex-end",
  },
});
