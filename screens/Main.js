import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { COLORS } from "../theme";
import { AUDIO } from "./constants";
import { Favourites, CustomImage, Info, Progress, Action } from "../components";

export const Main = () => {
  const [sound, setSound] = useState();
  const [favourite, setIsFavourite] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const heartIcon = favourite ? "heart" : "hearto";

  const handlePress = () => {
    setIsFavourite((prevState) => !prevState);
  };

  const playSound = async () => {
    setIsPlaying((prevState) => !prevState);
    const { sound } = await Audio.Sound.createAsync(AUDIO.firstAudio);
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Favourites heartIcon={heartIcon} handlePress={handlePress} />
      <CustomImage />
      <Info name={"Eternal Chains"} title={"Animal"} />
      <Progress />
      <Action playSound={playSound} isPlaying={isPlaying} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 80,
    paddingHorizontal: 25,
    backgroundColor: COLORS.primary,
  },
});
