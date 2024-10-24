import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Padding,
  Gap,
} from "../GlobalStyles";

const ItemDetailsDark = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.itemDetailsDark}>
      <Image
        style={styles.itemDetailsDarkChild}
        contentFit="cover"
        source={require("../assets/ellipse-2251.png")}
      />
      <Image
        style={styles.pngfuel3Icon}
        contentFit="cover"
        source={require("../assets/pngfuel-3.png")}
      />
      <Pressable
        style={[styles.continueWrapper, styles.groupInnerBg]}
        onPress={() => navigation.navigate("CartDark")}
      >
        <Text style={[styles.continue, styles.textTypo1]}>Add to cart</Text>
      </Pressable>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <View style={styles.h2Parent}>
          <Text style={styles.h2}>1kg, 4$</Text>
          <View style={styles.h1Parent}>
            <Text style={styles.h1}>Arabic Ginger</Text>
            <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
              <View style={[styles.groupContainer, styles.frameWrapperLayout]}>
                <View style={styles.groupWrapper}>
                  <View style={styles.groupPosition}>
                    <View
                      style={[styles.groupChild, styles.groupChildBorder]}
                    />
                    <View style={styles.groupItem} />
                  </View>
                </View>
                <Text style={[styles.text, styles.textTypo1]}>4</Text>
                <View style={styles.groupWrapper}>
                  <View style={styles.groupPosition}>
                    <View style={[styles.groupInner, styles.groupPosition]} />
                    <Image
                      style={styles.vectorIcon}
                      contentFit="cover"
                      source={require("../assets/vector.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.gingerIsA, styles.text4Typo]}>
          Ginger is a flowering plant whose rhizome, ginger root or ginger, is
          widely used as a spice and a folk medicine.
        </Text>
      </View>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={styles.frameGroup}>
          <View style={[styles.frameContainer, styles.groupChildBorder]}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-368504.png")}
              />
              <View style={styles.parent}>
                <Text style={[styles.text1, styles.textTypo]}>100%</Text>
                <Text style={[styles.organic, styles.text4Typo]}>Organic</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.groupChildBorder]}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-368505.png")}
              />
              <View style={styles.parent}>
                <Text style={[styles.text1, styles.textTypo]}>1 Year</Text>
                <Text style={[styles.organic, styles.text4Typo]}>
                  Expiration
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.frameContainer, styles.groupChildBorder]}>
            <View style={styles.frameView}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-368506.png")}
              />
              <View style={styles.parent}>
                <Text style={styles.text2}>
                  <Text style={styles.textTypo}>{`4.8 `}</Text>
                  <Text style={[styles.text4, styles.text4Typo]}>(256)</Text>
                </Text>
                <Text style={[styles.organic, styles.text4Typo]}>Reviews</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.groupChildBorder]}>
            <View style={styles.frameView}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-368507.png")}
              />
              <View style={styles.parent}>
                <Text style={[styles.text1, styles.textTypo]}>80 kcal</Text>
                <Text
                  style={[styles.organic, styles.text4Typo]}
                >{`100 Gram `}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupView}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("HomeDark")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-367704.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupChild1, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/group-367721.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupInnerBg: {
    backgroundColor: Color.lightColorsPrimary,
    borderRadius: Border.br_81xl,
  },
  textTypo1: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
  },
  parentPosition: {
    left: 24,
    position: "absolute",
  },
  frameWrapperLayout: {
    width: 116,
    height: 36,
    top: 0,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_100,
    borderStyle: "solid",
  },
  groupPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  text4Typo: {
    color: Color.darkFontGrey,
    fontFamily: FontFamily.body14Medium,
    fontWeight: "500",
  },
  textTypo: {
    color: Color.lightColorsPrimary,
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    fontSize: FontSize.body16Bold_size,
  },
  wrapperLayout: {
    width: 44,
    height: 44,
    top: 0,
    position: "absolute",
  },
  itemDetailsDarkChild: {
    top: -530,
    left: -258,
    width: 906,
    height: 906,
    position: "absolute",
  },
  pngfuel3Icon: {
    top: 104,
    left: 71,
    width: 249,
    height: 224,
    position: "absolute",
  },
  continue: {
    fontSize: FontSize.body16Bold_size,
  },
  continueWrapper: {
    top: 762,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    width: 342,
    left: 24,
    position: "absolute",
  },
  h2: {
    top: 42,
    fontSize: FontSize.heading20Bold_size,
    color: Color.lightColorsSecondary,
    textAlign: "left",
    left: 0,
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    position: "absolute",
  },
  h1: {
    top: 2,
    fontSize: FontSize.heading24Bold_size,
    textAlign: "left",
    left: 0,
    color: Color.colorWhite,
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.darkColorsDarkBG2,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    borderRadius: Border.br_81xl,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_100,
  },
  groupItem: {
    height: "6.94%",
    width: "40.28%",
    top: "52.78%",
    right: "26.39%",
    bottom: "40.28%",
    left: "33.33%",
    backgroundColor: Color.lightColorsLightBG,
    borderColor: Color.darkFontGrey,
    borderTopWidth: 2.5,
    borderStyle: "solid",
    position: "absolute",
  },
  groupWrapper: {
    width: 36,
    height: 36,
  },
  text: {
    fontSize: FontSize.heading18Bold_size,
  },
  groupInner: {
    backgroundColor: Color.lightColorsPrimary,
    borderRadius: Border.br_81xl,
  },
  vectorIcon: {
    height: "44.44%",
    width: "44.44%",
    top: "27.78%",
    right: "27.78%",
    bottom: "27.78%",
    left: "27.78%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupContainer: {
    gap: Gap.gap_sm,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    left: 226,
  },
  h1Parent: {
    height: 36,
    top: 0,
    left: 0,
    width: 342,
    position: "absolute",
  },
  h2Parent: {
    height: 69,
    width: 342,
  },
  gingerIsA: {
    display: "flex",
    width: 330,
    textAlign: "left",
    fontSize: FontSize.body16Bold_size,
    alignItems: "center",
  },
  groupParent: {
    top: 408,
    gap: Gap.gap_xs,
  },
  frameChild: {
    height: 35,
    width: 35,
  },
  text1: {
    textAlign: "left",
  },
  organic: {
    fontSize: FontSize.body14Medium_size,
    textAlign: "left",
  },
  parent: {
    gap: Gap.gap_2xs,
  },
  frameView: {
    gap: Gap.gap_sm,
    alignItems: "center",
    flexDirection: "row",
  },
  frameContainer: {
    borderRadius: Border.br_base,
    width: 163,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_xs,
  },
  frameGroup: {
    gap: Gap.gap_sm,
    flexDirection: "row",
  },
  text4: {
    fontSize: FontSize.body12Medium_size,
  },
  text2: {
    textAlign: "left",
  },
  groupIcon: {
    height: 38,
    width: 35,
  },
  frameParent: {
    top: 572,
    gap: Gap.gap_sm,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 0,
  },
  groupChild1: {
    left: 298,
  },
  groupView: {
    top: 24,
    height: 44,
    width: 342,
    left: 24,
    position: "absolute",
  },
  itemDetailsDark: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.darkColorsDarkBG,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ItemDetailsDark;
