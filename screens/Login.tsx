import 'react-native-gesture-handler';
import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontFamily,
  Color,
  FontSize,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Intro")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-367703.png")}
        />
      </Pressable>
      <View style={styles.loginInner}>
        <View style={styles.frameParent}>
          <View style={styles.componentParent}>
            <View style={styles.rectangleParent}>
              <View style={[styles.componentChild, styles.iconLayout]} />
              <Text style={[styles.text, styles.textTypo2]}>1</Text>
            </View>
            <View style={styles.rectangleParent}>
              <View style={[styles.componentChild, styles.iconLayout]} />
              <Text style={[styles.text1, styles.textTypo2]}>2</Text>
            </View>
            <View style={styles.rectangleContainer}>
              <View style={[styles.componentChild, styles.iconLayout]} />
              <Text style={[styles.text2, styles.textTypo2]}>3</Text>
            </View>
          </View>
          <View style={styles.instanceParent}>
            <View style={styles.rectangleParent}>
              <View style={[styles.componentChild, styles.iconLayout]} />
              <Text style={[styles.text3, styles.textTypo2]}>4</Text>
            </View>
            <View style={styles.rectangleParent}>
              <View style={[styles.componentChild, styles.iconLayout]} />
              <Text style={[styles.text1, styles.textTypo2]}>5</Text>
            </View>
            <View style={styles.rectangleContainer}>
              <View style={[styles.componentChild, styles.iconLayout]} />
              <Text style={[styles.text5, styles.textTypo2]}>6</Text>
            </View>
          </View>
          <View style={styles.instanceGroup}>
            <View style={styles.rectangleParent}>
              <View style={[styles.componentChild, styles.iconLayout]} />
              <Text style={[styles.text6, styles.textTypo2]}>7</Text>
            </View>
            <View style={styles.rectangleParent}>
              <View style={[styles.componentChild, styles.iconLayout]} />
              <Text style={[styles.text3, styles.textTypo2]}>8</Text>
            </View>
            <View style={styles.rectangleContainer}>
              <View style={[styles.componentChild, styles.iconLayout]} />
              <Text style={[styles.text5, styles.textTypo2]}>9</Text>
            </View>
          </View>
          <View style={styles.instanceGroup}>
            <View style={styles.rectangleParent}>
              <View style={[styles.componentChild, styles.iconLayout]} />
              <Text style={[styles.text9, styles.textTypo1]}>1</Text>
            </View>
            <View style={styles.rectangleParent}>
              <View style={[styles.componentChild, styles.iconLayout]} />
              <Text style={[styles.text10, styles.textTypo2]}>0</Text>
            </View>
            <View style={styles.rectangleContainer}>
              <View style={[styles.componentChild, styles.iconLayout]} />
              <Text style={[styles.text11, styles.textTypo1]}>1</Text>
              <Image
                style={styles.delete1Icon}
                contentFit="cover"
                source={require("../assets/delete-11.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupParent}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/group-14.png")}
        />
        <View style={styles.frameGroup}>
          <View style={styles.enterYourMobileNumberParent}>
            <Text style={[styles.enterYourMobile, styles.textTypo2]}>
              Enter your mobile number
            </Text>
            <Text style={[styles.weWillSend, styles.weWillSendTypo]}>
              We will send you a verification code
            </Text>
          </View>
          <View style={styles.parent}>
            <Text style={[styles.text12, styles.textTypo]}>+44</Text>
            <View style={styles.groupChild} />
            <Text style={[styles.text13, styles.textTypo]}>
              (000) 000-00-00
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.componentGroup, styles.wrapperPosition]}>
        <Pressable
          style={styles.continueWrapper}
          onPress={() => navigation.navigate("Home")}
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
  wrapperPosition: {
    left: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo2: {
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    color: Color.lightFontDark,
  },
  textTypo1: {
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
  textTypo: {
    top: 0,
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    fontSize: FontSize.heading24Bold_size,
    position: "absolute",
  },
  wrapper: {
    top: 24,
    width: 44,
    height: 44,
  },
  componentChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    left: "46.22%",
    position: "absolute",
  },
  rectangleParent: {
    width: 119,
    height: 50,
  },
  text1: {
    left: "43.7%",
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    position: "absolute",
  },
  text2: {
    left: "43.75%",
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleContainer: {
    width: 120,
    height: 50,
  },
  componentParent: {
    flexDirection: "row",
    width: 358,
  },
  text3: {
    left: "42.86%",
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    position: "absolute",
  },
  text5: {
    left: "42.92%",
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    position: "absolute",
  },
  instanceParent: {
    paddingRight: Padding.p_8xs,
    flexDirection: "row",
    width: 358,
  },
  text6: {
    left: "44.54%",
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    position: "absolute",
  },
  instanceGroup: {
    flexDirection: "row",
  },
  text9: {
    color: Color.lightFontDark,
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    left: "46.22%",
  },
  text10: {
    left: "42.02%",
    fontSize: FontSize.heading24Bold_size,
    top: "20%",
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
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
  loginInner: {
    top: 548,
    left: 16,
    backgroundColor: Color.lightColorsLightBG,
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
  },
  weWillSend: {
    color: Color.lightFontGrey,
    width: 274,
  },
  enterYourMobileNumberParent: {
    alignItems: "center",
    gap: Gap.gap_sm,
  },
  text12: {
    left: 0,
    color: Color.lightFontDark,
  },
  groupChild: {
    top: 6,
    left: 50,
    borderStyle: "solid",
    borderColor: Color.lightFontDark,
    borderRightWidth: 1,
    width: 1,
    height: 20,
    position: "absolute",
  },
  text13: {
    left: 54,
    color: Color.lightColorsLightGrey,
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
    color: Color.colorWhite,
    fontSize: FontSize.body16Bold_size,
    textAlign: "center",
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
    color: "#a9a9aa",
  },
  termsOfUse: {
    textDecorationLine: "underline",
    color: Color.colorMediumslateblue,
  },
  byClickingOnContainer: {
    width: 326,
  },
  componentGroup: {
    top: 405,
    gap: Gap.gap_md,
    alignItems: "center",
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_5xl,
  },
});

export default Login;
