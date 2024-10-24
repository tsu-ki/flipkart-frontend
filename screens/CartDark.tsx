import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from '@react-navigation/native';
import {
  Gap,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const CartDark = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cartDark}>
      <View style={styles.cartDarkInner}>
        <View style={[styles.cartParent, styles.parentPosition]}>
          <Text style={styles.cart}>Cart</Text>
          <Image
            style={styles.basketIcon}
            contentFit="cover"
            source={require("../assets/basket.png")}
          />
        </View>
      </View>
      <View style={styles.groupParent}>
        <View
          style={[
            styles.f1ea7dcce3b5d06cd1b1418f9b9413Parent,
            styles.parentLayout1,
          ]}
        >
          <Image
            style={styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon}
            contentFit="cover"
            source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-31.png")}
          />
          <View style={[styles.h1Parent, styles.parentPosition]}>
            <Text style={[styles.h1, styles.h1Typo]}>Bell Pepper Red</Text>
            <Text style={[styles.h2, styles.h1Typo]}>1kg, 6$</Text>
          </View>
          <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
            <View style={[styles.groupContainer, styles.frameWrapperLayout]}>
              <View style={styles.groupWrapper}>
                <View style={[styles.rectangleParent, styles.groupPosition]}>
                  <View style={[styles.groupChild, styles.lineViewBorder]} />
                  <View style={styles.groupItem} />
                </View>
              </View>
              <Text style={[styles.text, styles.textTypo]}>2</Text>
              <View style={[styles.groupFrame, styles.groupPosition]}>
                <View style={[styles.rectangleParent, styles.groupPosition]}>
                  <View style={[styles.groupInner, styles.groupInnerBg]} />
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.lineView, styles.lineViewBorder]} />
        </View>
        <View style={[styles.pngfuel3Parent, styles.parentLayout1]}>
          <Image
            style={[styles.pngfuel3Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/pngfuel-31.png")}
          />
          <View style={[styles.h1Parent, styles.parentPosition]}>
            <Text
              style={[styles.h1, styles.h1Typo]}
            >{`Butternut Squash `}</Text>
            <Text style={[styles.h2, styles.h1Typo]}>1kg, 8$</Text>
          </View>
          <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
            <View style={[styles.groupContainer, styles.frameWrapperLayout]}>
              <View style={styles.groupWrapper}>
                <View style={[styles.rectangleParent, styles.groupPosition]}>
                  <View style={[styles.groupChild, styles.lineViewBorder]} />
                  <View style={styles.groupItem} />
                </View>
              </View>
              <Text style={[styles.text1, styles.textTypo]}>4</Text>
              <View style={[styles.groupFrame, styles.groupPosition]}>
                <View style={[styles.rectangleParent, styles.groupPosition]}>
                  <View style={[styles.groupInner, styles.groupInnerBg]} />
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.lineView, styles.lineViewBorder]} />
        </View>
        <View style={[styles.pngfuel4Parent, styles.parentLayout1]}>
          <Image
            style={[styles.pngfuel4Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/pngfuel-4.png")}
          />
          <View style={[styles.h1Parent, styles.parentPosition]}>
            <Text style={[styles.h1, styles.h1Typo]}>Arabic Ginger</Text>
            <Text style={[styles.h2, styles.h1Typo]}>1kg, 4$</Text>
          </View>
          <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
            <View style={[styles.groupContainer, styles.frameWrapperLayout]}>
              <View style={styles.groupWrapper}>
                <View style={[styles.rectangleParent, styles.groupPosition]}>
                  <View style={[styles.groupChild, styles.lineViewBorder]} />
                  <View style={styles.groupItem} />
                </View>
              </View>
              <Text style={[styles.text1, styles.textTypo]}>6</Text>
              <View style={[styles.groupFrame, styles.groupPosition]}>
                <View style={[styles.rectangleParent, styles.groupPosition]}>
                  <View style={[styles.groupInner, styles.groupInnerBg]} />
                  <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.lineView, styles.lineViewBorder]} />
        </View>
        <View style={[styles.groupParent2, styles.parentLayout]}>
          <View
            style={[styles.nicepngCarrotPng143608Parent, styles.parentLayout]}
          >
            <Image
              style={styles.nicepngCarrotPng143608Icon}
              contentFit="cover"
              source={require("../assets/nicepng-carrotpng-143608.png")}
            />
            <View style={[styles.h1Parent1, styles.parentPosition]}>
              <Text style={[styles.h1, styles.h1Typo]}>Organic Carrots</Text>
              <Text style={[styles.h2, styles.h1Typo]}>1kg, 4$</Text>
            </View>
          </View>
          <View style={[styles.frameWrapper2, styles.frameWrapperLayout]}>
            <View style={[styles.groupContainer, styles.frameWrapperLayout]}>
              <View style={styles.groupWrapper}>
                <View style={[styles.rectangleParent, styles.groupPosition]}>
                  <View style={[styles.groupChild, styles.lineViewBorder]} />
                  <View style={styles.groupItem} />
                </View>
              </View>
              <Text style={[styles.text, styles.textTypo]}>2</Text>
              <View style={[styles.groupFrame, styles.groupPosition]}>
                <View style={[styles.rectangleParent, styles.groupPosition]}>
                  <View style={[styles.groupInner, styles.groupInnerBg]} />
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
      <View style={[styles.continueWrapper, styles.groupInnerBg]}>
        <Text style={styles.continue}>Checkout</Text>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HomeDark")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-367704.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    gap: Gap.gap_2xs,
    top: 0,
    position: "absolute",
  },
  parentLayout1: {
    height: 62,
    width: 390,
    left: 0,
    position: "absolute",
  },
  h1Typo: {
    textAlign: "left",
    fontSize: FontSize.body16Bold_size,
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
  },
  frameWrapperLayout: {
    height: 36,
    width: 116,
    position: "absolute",
  },
  groupPosition: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  lineViewBorder: {
    borderColor: Color.colorDarkslategray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.heading18Bold_size,
    top: "18.06%",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    position: "absolute",
  },
  groupInnerBg: {
    backgroundColor: Color.lightColorsPrimary,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  iconLayout: {
    height: 38,
    width: 42,
    left: 24,
    position: "absolute",
  },
  parentLayout: {
    height: 46,
    position: "absolute",
  },
  cart: {
    fontSize: FontSize.heading20Bold_size,
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  basketIcon: {
    width: 20,
    height: 20,
  },
  cartParent: {
    alignItems: "center",
    flexDirection: "row",
    left: 0,
  },
  cartDarkInner: {
    top: 33,
    left: 162,
    width: 67,
    height: 26,
    position: "absolute",
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon: {
    width: 48,
    height: 42,
    left: 24,
    top: 2,
    position: "absolute",
  },
  h1: {
    color: Color.colorWhite,
    textAlign: "left",
  },
  h2: {
    color: Color.lightColorsSecondary,
  },
  h1Parent: {
    left: 88,
  },
  groupChild: {
    backgroundColor: Color.darkColorsDarkBG2,
    borderWidth: 1,
    borderRadius: Border.br_81xl,
    borderColor: Color.colorDarkslategray_100,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
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
  rectangleParent: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  groupWrapper: {
    right: "68.97%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    width: "31.03%",
    height: "100%",
    position: "absolute",
  },
  text: {
    left: "45.69%",
  },
  groupInner: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    width: "100%",
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
  groupFrame: {
    left: "68.97%",
    width: "31.03%",
    right: "0%",
    position: "absolute",
  },
  groupContainer: {
    left: 0,
    top: 0,
  },
  frameWrapper: {
    left: 250,
    top: 5,
    width: 116,
  },
  lineView: {
    top: 62,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    left: 0,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Parent: {
    top: 0,
  },
  pngfuel3Icon: {
    top: 2,
  },
  text1: {
    left: "44.83%",
  },
  pngfuel3Parent: {
    top: 86,
  },
  pngfuel4Icon: {
    top: 3,
  },
  pngfuel4Parent: {
    top: 172,
  },
  nicepngCarrotPng143608Icon: {
    top: 9,
    width: 45,
    height: 28,
    left: 0,
    position: "absolute",
  },
  h1Parent1: {
    left: 69,
  },
  nicepngCarrotPng143608Parent: {
    width: 192,
    left: 0,
    top: 0,
  },
  frameWrapper2: {
    left: 231,
    top: 5,
    width: 116,
  },
  groupParent2: {
    top: 258,
    left: 19,
    width: 347,
  },
  groupParent: {
    top: 108,
    height: 304,
    width: 390,
    left: 0,
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
    top: 762,
    width: 342,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    left: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 24,
    width: 44,
    height: 44,
    left: 24,
    position: "absolute",
  },
  cartDark: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.darkColorsDarkBG,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default CartDark;
