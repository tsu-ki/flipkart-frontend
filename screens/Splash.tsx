import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const Splash = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.splash}>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Intro")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-15.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    position: "absolute",
    left: 140,
    top: 367,
    width: 110,
    height: 110,
  },
  splash: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.lightColorsPrimary,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Splash;
