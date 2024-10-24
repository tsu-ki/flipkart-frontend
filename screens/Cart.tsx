import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useRoute } from "@react-navigation/native";
import {
  Gap,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

interface CartItem {
  fruitName: string;
  count: number;
}

const Cart = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute();
  // Get cart data from route params or use default values
  const cartItem = (route.params as { cartItem?: CartItem })?.cartItem || {
    fruitName: "Fruit",
    count: 0
  };

  return (
    <View style={styles.cart}>
      <View style={[styles.groupParent, styles.wrapperLayout]}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("ItemDetails")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-367701.png")}
          />
        </Pressable>
        <View style={[styles.cartParent, styles.parentPosition]}>
          <Text style={styles.cart1}>Cart</Text>
          <Image
            style={styles.basketIcon}
            contentFit="cover"
            source={require("../assets/basket.png")}
          />
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View
          style={[
            styles.f1ea7dcce3b5d06cd1b1418f9b9413Parent,
            styles.parentLayout1,
          ]}
        >
          <Image
            style={styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon}
            contentFit="cover"
            source={require("../assets/object.png")}
          />
          <View style={[styles.h1Parent, styles.parentPosition]}>
            <Text style={[styles.h1, styles.h1Typo]}>{cartItem.fruitName}</Text>
            <Text style={[styles.h2, styles.h1Typo]}>Count: {cartItem.count}</Text>
          </View>
          <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
            <View style={[styles.frameView, styles.frameWrapperLayout]}>
              <View style={styles.groupWrapper}>
                <View style={[styles.rectangleParent, styles.groupPosition]}>
                  <View style={[styles.groupChild, styles.lineViewBorder]} />
                  <View style={styles.groupItem} />
                </View>
              </View>
              <Text style={[styles.text, styles.textTypo]}>{cartItem.count}</Text>
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
      </View>
      <View style={[styles.continueWrapper, styles.groupInnerBg]}>
        <Text style={styles.continue}>Checkout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 44,
    position: "absolute",
  },
  parentPosition: {
    gap: Gap.gap_2xs,
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
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.heading18Bold_size,
    top: "18.06%",
    textAlign: "center",
    color: Color.lightFontDark,
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    position: "absolute",
  },
  groupInnerBg: {
    backgroundColor: Color.lightColorsPrimary,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 44,
    top: 0,
    left: 0,
  },
  cart1: {
    fontSize: FontSize.heading20Bold_size,
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    color: Color.lightFontDark,
  },
  basketIcon: {
    width: 20,
    height: 20,
  },
  cartParent: {
    left: 138,
    alignItems: "center",
    flexDirection: "row",
    top: 9,
  },
  groupParent: {
    top: 24,
    width: 205,
    left: 24,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon: {
    width: 48,
    height: 42,
    top: 2,
    left: 24,
    position: "absolute",
  },
  h1: {
    color: Color.lightFontDark,
    textAlign: "left",
  },
  h2: {
    color: Color.lightColorsSecondary,
  },
  h1Parent: {
    left: 88,
    top: 0,
  },
  groupChild: {
    borderWidth: 1,
    backgroundColor: Color.lightColorsLightBG,
    borderRadius: Border.br_81xl,
    borderColor: Color.colorWhitesmoke_100,
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
    borderColor: Color.lightFontGrey,
    borderTopWidth: 2.5,
    borderStyle: "solid",
    backgroundColor: Color.lightColorsLightBG,
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
  frameView: {
    top: 0,
    left: 0,
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
  groupContainer: {
    top: 108,
    height: 304,
    width: 390,
    left: 0,
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
    top: 762,
    width: 342,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    left: 24,
  },
  cart: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Cart;
