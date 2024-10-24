import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Gap, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ItemsDark = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.itemsDark}>
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("HomeDark")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-367702.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupChild, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/group-367721.png")}
        />
        <View style={[styles.vegetablesParent, styles.parentPosition]}>
          <Text style={styles.vegetables}>Vegetables</Text>
          <Image
            style={styles.earOfCornLayout}
            contentFit="cover"
            source={require("../assets/ear-of-corn.png")}
          />
        </View>
      </View>
      <View style={[styles.groupContainer, styles.groupContainerLayout]}>
        <View style={[styles.rectangleParent, styles.groupContainerLayout]}>
          <View style={[styles.groupItem, styles.groupContainerLayout]} />
          <View style={[styles.groupInner, styles.groupInnerPosition]} />
          <Image
            style={[
              styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon,
              styles.groupInnerPosition,
            ]}
            contentFit="cover"
            source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-3.png")}
          />
          <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
            <View style={[styles.h1Parent, styles.parentPosition]}>
              <Text style={[styles.h1, styles.h1Typo]}>Bell Pepper Red</Text>
              <Text style={[styles.h2, styles.h1Typo]}>1kg, 6$</Text>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={[styles.plus1Icon, styles.earOfCornLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.rectangleContainer, styles.groupContainerLayout]}
        onPress={() => navigation.navigate("ItemDetailsDark")}
      >
        <View style={[styles.groupItem, styles.groupContainerLayout]} />
        <View style={[styles.frameContainer, styles.frameWrapperPosition]}>
          <View style={[styles.h1Parent, styles.parentPosition]}>
            <Text style={[styles.h1, styles.h1Typo]}>Arabic Ginger</Text>
            <Text style={[styles.h2, styles.h1Typo]}>1kg, 4$</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={[styles.plus1Icon, styles.earOfCornLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Image
          style={styles.pngfuel3Icon}
          contentFit="cover"
          source={require("../assets/pngfuel-32.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent1, styles.rectangleParentPosition2]}>
        <View style={[styles.groupItem, styles.groupContainerLayout]} />
        <View style={[styles.frameWrapper1, styles.frameWrapperPosition]}>
          <View style={[styles.h1Parent, styles.parentPosition]}>
            <Text
              style={[styles.h1, styles.h1Typo]}
            >{`Butternut Squash `}</Text>
            <Text style={[styles.h2, styles.h1Typo]}>1kg, 8$</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={[styles.plus1Icon, styles.earOfCornLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Image
          style={styles.pngfuel3Icon}
          contentFit="cover"
          source={require("../assets/pngfuel-33.png")}
        />
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentPosition1]}>
        <View style={[styles.groupItem, styles.groupContainerLayout]} />
        <View style={[styles.frameWrapper2, styles.frameWrapperPosition]}>
          <View style={[styles.h1Parent, styles.parentPosition]}>
            <Text style={[styles.h1, styles.h1Typo]}>Fresh Broccoli</Text>
            <Text style={[styles.h2, styles.h1Typo]}>1kg, 2$</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={[styles.plus1Icon, styles.earOfCornLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Image
          style={styles.pngkeyIcon}
          contentFit="cover"
          source={require("../assets/pngkey.png")}
        />
      </View>
      <View style={[styles.rectangleParent5, styles.rectangleParentPosition2]}>
        <View style={[styles.groupItem, styles.groupContainerLayout]} />
        <View style={[styles.frameWrapper3, styles.frameWrapperPosition]}>
          <View style={[styles.h1Parent, styles.parentPosition]}>
            <Text style={[styles.h1, styles.h1Typo]}>Fresh Lettuce</Text>
            <Text style={[styles.h2, styles.h1Typo]}>1kg, 2$</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={[styles.plus1Icon, styles.earOfCornLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Image
          style={[styles.kindpng4096995Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/kindpng-4096995.png")}
        />
      </View>
      <View style={[styles.rectangleParent7, styles.rectangleParentPosition1]}>
        <View style={[styles.groupItem, styles.groupContainerLayout]} />
        <View style={[styles.frameWrapper4, styles.frameWrapperPosition]}>
          <View style={[styles.h1Parent, styles.parentPosition]}>
            <Text style={[styles.h1, styles.h1Typo]}>Organic Carrots</Text>
            <Text style={[styles.h2, styles.h1Typo]}>1kg, 4$</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={[styles.plus1Icon, styles.earOfCornLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Image
          style={[styles.nicepngCarrotPng143608Icon, styles.frameWrapperLayout]}
          contentFit="cover"
          source={require("../assets/nicepng-carrotpng-1436081.png")}
        />
      </View>
      <View style={[styles.rectangleParent9, styles.rectangleParentPosition]}>
        <View style={[styles.groupItem, styles.groupContainerLayout]} />
        <View style={[styles.frameWrapper5, styles.frameWrapperPosition]}>
          <View style={[styles.h1Parent, styles.parentPosition]}>
            <Text style={[styles.h1, styles.h1Typo]}>Fresh Spinach</Text>
            <Text style={[styles.h2, styles.h1Typo]}>1kg, 2$</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={[styles.plus1Icon, styles.earOfCornLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Image
          style={[styles.spinachIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/spinach.png")}
        />
      </View>
      <View style={[styles.rectangleParent11, styles.rectangleParentPosition]}>
        <View style={[styles.groupItem, styles.groupContainerLayout]} />
        <View style={[styles.frameWrapper6, styles.frameWrapperPosition]}>
          <View style={[styles.h1Parent, styles.parentPosition]}>
            <Text style={[styles.h1, styles.h1Typo]}>Cherry Tomato</Text>
            <Text style={[styles.h2, styles.h1Typo]}>1kg, 4$</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={[styles.plus1Icon, styles.earOfCornLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <Image
          style={styles.pngwingIcon}
          contentFit="cover"
          source={require("../assets/pngwing.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    width: 44,
    top: 0,
    height: 44,
    position: "absolute",
  },
  parentPosition: {
    gap: Gap.gap_2xs,
    position: "absolute",
  },
  groupContainerLayout: {
    height: 214,
    width: 163,
    position: "absolute",
  },
  groupInnerPosition: {
    width: 112,
    left: 26,
    top: 24,
    position: "absolute",
  },
  frameWrapperLayout: {
    width: 106,
    position: "absolute",
  },
  h1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
  },
  rectangleLayout: {
    height: 36,
    width: 36,
    position: "absolute",
  },
  earOfCornLayout: {
    height: 16,
    width: 16,
  },
  frameWrapperPosition: {
    left: 16,
    top: 146,
    height: 44,
  },
  rectangleParentPosition2: {
    top: 330,
    height: 214,
    width: 163,
    position: "absolute",
  },
  rectangleParentPosition1: {
    top: 560,
    height: 214,
    width: 163,
    position: "absolute",
  },
  iconPosition: {
    left: 36,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 790,
    height: 214,
    width: 163,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 0,
    width: 44,
  },
  groupChild: {
    left: 298,
  },
  vegetables: {
    fontSize: FontSize.heading20Bold_size,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
  },
  vegetablesParent: {
    top: 9,
    left: 107,
    flexDirection: "row",
    alignItems: "center",
  },
  groupParent: {
    width: 342,
    height: 44,
    top: 24,
    left: 24,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_base,
    backgroundColor: Color.darkColorsDarkBG2,
    top: 0,
    left: 0,
  },
  groupInner: {
    height: 99,
    backgroundColor: Color.darkColorsDarkBG2,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon: {
    height: 98,
  },
  h1: {
    fontSize: FontSize.body14Medium_size,
    color: Color.colorWhite,
  },
  h2: {
    fontSize: FontSize.body16Bold_size,
    color: Color.lightColorsSecondary,
  },
  h1Parent: {
    top: 0,
    left: 0,
  },
  frameWrapper: {
    left: 16,
    top: 146,
    height: 44,
  },
  rectangleParent: {
    top: 0,
    left: 0,
  },
  rectangleView: {
    borderRadius: Border.br_3xl,
    backgroundColor: Color.lightColorsPrimary,
    top: 0,
    left: 0,
  },
  plus1Icon: {
    top: 10,
    left: 10,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 166,
    left: 115,
  },
  groupContainer: {
    top: 100,
    width: 163,
    left: 24,
  },
  frameContainer: {
    width: 93,
    position: "absolute",
  },
  pngfuel3Icon: {
    top: 27,
    left: 34,
    width: 99,
    height: 89,
    position: "absolute",
  },
  rectangleContainer: {
    left: 203,
    top: 100,
    width: 163,
  },
  frameWrapper1: {
    width: 120,
    position: "absolute",
  },
  rectangleParent1: {
    left: 203,
  },
  frameWrapper2: {
    width: 97,
    position: "absolute",
  },
  pngkeyIcon: {
    top: 36,
    left: 32,
    width: 98,
    height: 71,
    position: "absolute",
  },
  rectangleParent3: {
    left: 204,
  },
  frameWrapper3: {
    width: 94,
    position: "absolute",
  },
  kindpng4096995Icon: {
    top: 25,
    width: 92,
    height: 90,
  },
  rectangleParent5: {
    left: 24,
  },
  frameWrapper4: {
    width: 108,
    position: "absolute",
  },
  nicepngCarrotPng143608Icon: {
    top: 43,
    left: 29,
    height: 64,
  },
  rectangleParent7: {
    left: 25,
  },
  frameWrapper5: {
    width: 96,
    position: "absolute",
  },
  spinachIcon: {
    top: 46,
    height: 56,
    width: 93,
  },
  rectangleParent9: {
    left: 203,
  },
  frameWrapper6: {
    width: 101,
    position: "absolute",
  },
  pngwingIcon: {
    top: 39,
    left: 30,
    width: 102,
    height: 65,
    position: "absolute",
  },
  rectangleParent11: {
    left: 24,
  },
  itemsDark: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.darkColorsDarkBG,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ItemsDark;
