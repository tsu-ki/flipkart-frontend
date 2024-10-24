import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

const LoginDark = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.loginDark, styles.loginLayout]}>
      <View style={[styles.loginDarkChild, styles.text12Position]} />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Intro")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-367702.png")}
        />
      </Pressable>
      <View style={styles.loginDarkInner}>
        <View style={styles.frameParent}>
          <View style={styles.instanceParent}>
            <View style={styles.rectangleParent}>
              <View style={[styles.instanceChild, styles.iconLayout]} />
              <Text style={[styles.text, styles.textTypo1]}>1</Text>
            </View>
            <View style={styles.rectangleParent}>
              <View style={[styles.instanceChild, styles.iconLayout]} />
              <Text style={[styles.text1, styles.textTypo1]}>2</Text>
            </View>
            <View style={styles.rectangleContainer}>
              <View style={[styles.instanceChild, styles.iconLayout]} />
              <Text style={[styles.text2, styles.textTypo1]}>3</Text>
            </View>
          </View>
          <View style={styles.instanceGroup}>
            <View style={styles.rectangleParent}>
              <View style={[styles.instanceChild, styles.iconLayout]} />
              <Text style={[styles.text3, styles.textTypo1]}>4</Text>
            </View>
            <View style={styles.rectangleParent}>
              <View style={[styles.instanceChild, styles.iconLayout]} />
              <Text style={[styles.text1, styles.textTypo1]}>5</Text>
            </View>
            <View style={styles.rectangleContainer}>
              <View style={[styles.instanceChild, styles.iconLayout]} />
              <Text style={[styles.text5, styles.textTypo1]}>6</Text>
            </View>
          </View>
          <View style={styles.instanceContainer}>
            <View style={styles.rectangleParent}>
              <View style={[styles.instanceChild, styles.iconLayout]} />
              <Text style={[styles.text6, styles.textTypo1]}>7</Text>
            </View>
            <View style={styles.rectangleParent}>
              <View style={[styles.instanceChild, styles.iconLayout]} />
              <Text style={[styles.text3, styles.textTypo1]}>8</Text>
            </View>
            <View style={styles.rectangleContainer}>
              <View style={[styles.instanceChild, styles.iconLayout]} />
              <Text style={[styles.text5, styles.textTypo1]}>9</Text>
            </View>
          </View>
          <View style={styles.instanceContainer}>
            <View style={styles.rectangleParent}>
              <View style={[styles.instanceChild, styles.iconLayout]} />
              <Text style={[styles.text9, styles.textTypo]}>1</Text>
            </View>
            <View style={styles.rectangleParent}>
              <View style={[styles.instanceChild, styles.iconLayout]} />
              <Text style={[styles.text10, styles.textTypo1]}>0</Text>
            </View>
            <View style={styles.rectangleContainer}>
              <View style={[styles.instanceChild, styles.iconLayout]} />
              <Text style={[styles.text11, styles.textTypo]}>1</Text>
              <Image
                style={styles.delete1Icon}
                contentFit="cover"
                source={require("../assets/delete-1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/group-12.png")}
        />
        <View style={styles.frameGroup}>
          <View style={styles.enterYourMobileNumberParent}>
            <Text style={[styles.enterYourMobile, styles.textTypo1]}>
              Enter your mobile number
            </Text>
            <Text style={[styles.weWillSend, styles.weWillSendTypo]}>
              We will send you a verification code
            </Text>
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text12, styles.textTypo1]}>+44</Text>
            <View style={styles.groupChild} />
            <Text style={[styles.text13, styles.textTypo1]}>
              (000) 000-00-00
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.instanceParent1, styles.wrapperPosition]}>
        <Pressable
          style={styles.continueWrapper}
          onPress={() => navigation.navigate("HomeDark")}
        >
          <Text style={styles.continue}>Continue</Text>
        </Pressable>
        <Text style={[styles.byClickingOnContainer, styles.weWillSendTypo]}>
          <Text
            style={styles.byClickingOn}
          >{`By clicking on “Continue” you are agreeing to our `}</Text>
          <Text style={styles.termsOfUse}>{`terms of use `}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    height: 844,
    backgroundColor: Color.darkColorsDarkBG,
  },
  text12Position: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapperPosition: {
    left: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
  },
  textTypo: {
    display: "none",
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    position: "absolute",
  },
  weWillSendTypo: {
    fontFamily: FontFamily.body14Medium,
    fontWeight: "500",
    fontSize: FontSize.body16Bold_size,
    textAlign: "center",
  },
  loginDarkChild: {
    width: 390,
    height: 844,
    backgroundColor: Color.darkColorsDarkBG,
    top: 0,
  },
  wrapper: {
    top: 24,
    width: 44,
    height: 44,
  },
  instanceChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  text: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    fontSize: FontSize.heading24Bold_size,
    left: "46.22%",
    top: "20%",
    position: "absolute",
  },
  rectangleParent: {
    width: 119,
    height: 50,
  },
  text1: {
    left: "43.7%",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    position: "absolute",
  },
  text2: {
    left: "43.75%",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    position: "absolute",
  },
  rectangleContainer: {
    width: 120,
    height: 50,
  },
  instanceParent: {
    flexDirection: "row",
    width: 358,
  },
  text3: {
    left: "42.86%",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    position: "absolute",
  },
  text5: {
    left: "42.92%",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    position: "absolute",
  },
  instanceGroup: {
    paddingRight: Padding.p_8xs,
    flexDirection: "row",
    width: 358,
  },
  text6: {
    left: "44.54%",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    position: "absolute",
  },
  instanceContainer: {
    flexDirection: "row",
  },
  text9: {
    color: Color.lightFontDark,
    fontSize: FontSize.heading24Bold_size,
    left: "46.22%",
    top: "20%",
  },
  text10: {
    left: "42.02%",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    position: "absolute",
  },
  text11: {
    top: "24%",
    left: "47.08%",
    fontSize: FontSize.heading20Bold_size,
    color: Color.colorBlack,
  },
  delete1Icon: {
    height: "48%",
    width: "20%",
    top: "74%",
    right: "40%",
    bottom: "-22%",
    left: "40%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    gap: Gap.gap_sm,
    width: 358,
  },
  loginDarkInner: {
    top: 548,
    left: 16,
    backgroundColor: Color.darkColorsDarkBG2,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    position: "absolute",
    borderRadius: Border.br_5xl,
  },
  frameItem: {
    width: 66,
    height: 66,
  },
  enterYourMobile: {
    fontSize: FontSize.heading28Bold_size,
    width: 318,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
  },
  weWillSend: {
    width: 274,
    color: Color.darkFontGrey,
  },
  enterYourMobileNumberParent: {
    alignItems: "center",
    gap: Gap.gap_sm,
  },
  text12: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    fontSize: FontSize.heading24Bold_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 6,
    left: 50,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderRightWidth: 1,
    width: 1,
    height: 20,
    position: "absolute",
  },
  text13: {
    left: 54,
    color: Color.darkFontGrey,
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    fontSize: FontSize.heading24Bold_size,
    top: 0,
    position: "absolute",
  },
  parent: {
    width: 273,
    height: 31,
  },
  frameGroup: {
    gap: Gap.gap_2xl,
    alignItems: "center",
  },
  groupParent: {
    top: 79,
    left: 36,
    alignItems: "center",
    gap: Gap.gap_sm,
    position: "absolute",
  },
  continue: {
    fontSize: FontSize.body16Bold_size,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
  },
  continueWrapper: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightColorsPrimary,
    width: 342,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: Padding.p_base,
  },
  byClickingOn: {
    color: Color.darkFontGrey,
  },
  termsOfUse: {
    textDecorationLine : "underline",
    color: Color.colorMediumslateblue,
  },
  byClickingOnContainer: {
    width: 326,
  },
  instanceParent1: {
    top: 405,
    gap: Gap.gap_md,
    alignItems: "center",
  },
  loginDark: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 844,
    backgroundColor: Color.darkColorsDarkBG,
    borderRadius: Border.br_5xl,
  },
});

export default LoginDark;
