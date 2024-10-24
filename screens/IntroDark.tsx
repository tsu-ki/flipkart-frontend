import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontSize,
  Color,
  FontFamily,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const IntroDark = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.introDark}>
      <Image
        style={styles.paperBagWithHealthyFoodHeIcon}
        contentFit="cover"
        source={require("../assets/paperbagwithhealthyfoodhealthyfoodbackgroundsupermarketfoodconceptshoppingsupermarkethomedeliverymin1.png")}
      />
      <Image
        style={[styles.kindpng73363541Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/kindpng-7336354-1.png")}
      />
      <Image
        style={[styles.kindpng73363543Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/kindpng-7336354-3.png")}
      />
      <Image
        style={[styles.kindpng73363542Icon, styles.frameParentPosition]}
        contentFit="cover"
        source={require("../assets/kindpng-7336354-2.png")}
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-12.png")}
          />
          <View style={styles.getYourGroceriesDeliveredTParent}>
            <Text style={styles.getYourGroceries}>
              Get your groceries delivered to your home
            </Text>
            <Text style={[styles.theBestDelivery, styles.shopNowTypo]}>
              The best delivery app in town for delivering your daily fresh
              groceries
            </Text>
          </View>
        </View>
        <Pressable
          style={styles.shopNowWrapper}
          onPress={() => navigation.navigate("LoginDark")}
        >
          <Text style={[styles.shopNow, styles.shopNowTypo]}>Shop now</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 53,
    width: 48,
    position: "absolute",
  },
  frameParentPosition: {
    left: 36,
    position: "absolute",
  },
  shopNowTypo: {
    fontSize: FontSize.body16Bold_size,
    textAlign: "center",
  },
  paperBagWithHealthyFoodHeIcon: {
    top: 506,
    left: -75,
    width: 540,
    height: 360,
    position: "absolute",
  },
  kindpng73363541Icon: {
    top: 31,
    left: 316,
  },
  kindpng73363543Icon: {
    top: 385,
    left: 360,
  },
  kindpng73363542Icon: {
    top: 489,
    width: 42,
    height: 39,
  },
  frameChild: {
    width: 66,
    height: 66,
  },
  getYourGroceries: {
    fontSize: FontSize.heading28Bold_size,
    width: 318,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
  },
  theBestDelivery: {
    fontWeight: "500",
    fontFamily: FontFamily.body14Medium,
    color: Color.darkFontGrey,
    width: 274,
  },
  getYourGroceriesDeliveredTParent: {
    gap: Gap.gap_md,
    alignItems: "center",
  },
  groupParent: {
    gap: Gap.gap_lg,
    alignItems: "center",
  },
  shopNow: {
    color: Color.colorWhite,
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    fontSize: FontSize.body16Bold_size,
  },
  shopNowWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightColorsPrimary,
    width: 190,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    alignItems: "center",
  },
  frameParent: {
    top: 95,
    gap: Gap.gap_xl,
    alignItems: "center",
  },
  introDark: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.darkColorsDarkBG,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IntroDark;
