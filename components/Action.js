import { View, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const Action = ({ playSound, isPlaying }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialIcons name="skip-previous" size={60} color={COLORS.white} />
      </TouchableOpacity>
      <TouchableOpacity onPress={playSound} style={styles.playButton}>
        <Ionicons
          name={isPlaying ? "ios-play" : "ios-pause"}
          size={50}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons name="skip-next" size={60} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  playButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
