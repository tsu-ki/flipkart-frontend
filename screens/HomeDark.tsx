import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontFamily,
  Border,
  Color,
  Gap,
  FontSize,
  Padding,
} from "../GlobalStyles";

const HomeDark = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeDark}>
      <Image
        style={styles.homeDarkChild}
        contentFit="cover"
        source={require("../assets/ellipse-2251.png")}
      />
      <View style={styles.groupParent}>
        <View style={styles.maskGroupParent}>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("../assets/mask-group1.png")}
          />
          <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
            <View style={[styles.goodMorningParent, styles.groupWrapperLayout]}>
              <Text style={[styles.goodMorning, styles.myFlatTypo]}>
                Good morning
              </Text>
              <Text style={[styles.ameliaBarlow, styles.myFlatTypo]}>
                Amelia Barlow
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
          <View style={styles.frameParent}>
            <View style={styles.frameParent}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Text style={[styles.myFlat, styles.myFlatTypo]}>My Flat</Text>
            </View>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.homeDarkInner, styles.frameWrapperFlexBox]}>
        <View style={styles.frameContainer}>
          <View style={styles.frameParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-1.png")}
            />
            <Text style={[styles.searchCategory, styles.myFlatTypo]}>
              Search category
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameView, styles.frameViewPosition]}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/group-367791.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/group-367801.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/group-367801.png")}
        />
      </View>
      <View style={styles.groupView}>
        <View style={styles.frameGroup}>
          <View style={[styles.categoriesParent, styles.parentPosition1]}>
            <Text style={[styles.categories, styles.h1Typo]}>Categories</Text>
            <Image
              style={styles.faceSavoringFood}
              contentFit="cover"
              source={require("../assets/face-savoring-food.png")}
            />
          </View>
          <Text style={[styles.seeAll, styles.textTypo]}>See all</Text>
        </View>
        <View style={styles.frameParent1}>
          <View style={styles.groupParent1}>
            <Image
              style={styles.frameChild1}
              contentFit="cover"
              source={require("../assets/group-367811.png")}
            />
            <Text style={[styles.fruits, styles.myFlatTypo]}>Fruits</Text>
          </View>
          <Pressable
            style={styles.groupParent1}
            onPress={() => navigation.navigate("ItemsDark")}
          >
            <Image
              style={styles.frameChild1}
              contentFit="cover"
              source={require("../assets/group-367821.png")}
            />
            <Text style={[styles.fruits, styles.myFlatTypo]}>vegetables</Text>
          </Pressable>
          <View style={styles.groupParent1}>
            <Image
              style={styles.frameChild1}
              contentFit="cover"
              source={require("../assets/group-367831.png")}
            />
            <Text style={[styles.fruits, styles.myFlatTypo]}>Diary</Text>
          </View>
          <View style={styles.groupParent1}>
            <Image
              style={styles.frameChild1}
              contentFit="cover"
              source={require("../assets/group-367841.png")}
            />
            <Text style={[styles.fruits, styles.myFlatTypo]}>Meat</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupParent4, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Image
            style={[
              styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon,
              styles.iconPosition,
            ]}
            contentFit="cover"
            source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-3.png")}
          />
          <View style={[styles.frameWrapper1, styles.frameWrapperPosition]}>
            <View style={styles.parentPosition1}>
              <Text style={[styles.h1, styles.h1Typo]}>Bell Pepper Red</Text>
              <Text style={[styles.h2, styles.h1Typo]}>1kg, 4$</Text>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Image
            style={styles.plus1Icon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent5, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={[styles.groupChild, styles.groupParentLayout]} />
          <Image
            style={[styles.favpngRawMeatSteakBeefFooIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/favpng-rawmeatsteakbeeffood-1.png")}
          />
          <View style={[styles.frameWrapper2, styles.frameWrapperPosition]}>
            <View style={styles.parentPosition1}>
              <Text style={[styles.h1, styles.h1Typo]}>Lamb Meat</Text>
              <Text style={[styles.h2, styles.h1Typo]}>1kg, 45$</Text>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Image
            style={styles.plus1Icon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent6, styles.parentPosition]}>
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-368381.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChild2Position]}
          contentFit="cover"
          source={require("../assets/group-368391.png")}
        />
        <View style={[styles.rectangleParent2, styles.groupChild2Position]}>
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <Image
            style={styles.vectorIcon2}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </View>
        <View style={styles.rectangleParent3}>
          <View style={[styles.groupChild4, styles.groupPosition]} />
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.textTypo]}>4</Text>
          </View>
          <Image
            style={[styles.groupChild5, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/group-36836.png")}
          />
        </View>
        <Image
          style={[styles.groupChild6, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-368421.png")}
        />
      </View>
      <View style={[styles.rectangleParent4, styles.parentPosition]}>
        <View style={[styles.groupChild4, styles.groupPosition]} />
        <View style={[styles.rectangleParent5, styles.groupChild8Layout]}>
          <View style={[styles.groupChild8, styles.groupChild8Layout]} />
          <Text style={[styles.text1, styles.textTypo]}>4</Text>
        </View>
        <Image
          style={[styles.groupChild9, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/group-36836.png")}
        />
      </View>
      <View style={styles.seeAllParent}>
        <Text style={[styles.seeAll, styles.textTypo]}>See all</Text>
        <View style={[styles.categoriesParent, styles.parentPosition1]}>
          <Text style={[styles.categories, styles.h1Typo]}>Best selling</Text>
          <Image
            style={styles.faceSavoringFood}
            contentFit="cover"
            source={require("../assets/fire.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupWrapperLayout: {
    height: 39,
    width: 107,
    position: "absolute",
  },
  myFlatTypo: {
    textAlign: "center",
    fontFamily: FontFamily.body14Medium,
    fontWeight: "500",
  },
  frameWrapperFlexBox: {
    justifyContent: "center",
    borderRadius: Border.br_48xl,
    backgroundColor: Color.darkColorsDarkBG2,
    position: "absolute",
  },
  frameViewPosition: {
    top: 166,
    position: "absolute",
  },
  parentPosition1: {
    gap: Gap.gap_2xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  h1Typo: {
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    textAlign: "left",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.body14Medium,
    fontWeight: "500",
    fontSize: FontSize.body14Medium_size,
    position: "absolute",
  },
  groupParentLayout: {
    height: 214,
    width: 163,
    position: "absolute",
  },
  iconPosition: {
    top: 22,
    position: "absolute",
  },
  frameWrapperPosition: {
    top: 146,
    height: 44,
    position: "absolute",
  },
  groupLayout: {
    height: 36,
    width: 36,
  },
  groupPosition: {
    backgroundColor: Color.lightColorsPrimary,
    borderRadius: Border.br_3xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    top: 761,
    position: "absolute",
  },
  groupChildLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupChild2Position: {
    top: 36,
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupChildPosition: {
    left: "27.27%",
    right: "27.27%",
    width: "45.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild8Layout: {
    width: 18,
    height: 18,
    position: "absolute",
  },
  homeDarkChild: {
    top: -711,
    left: -168,
    width: 906,
    height: 906,
    position: "absolute",
  },
  maskGroupIcon: {
    width: 44,
    left: 0,
    top: 0,
    height: 44,
    position: "absolute",
  },
  goodMorning: {
    left: 1,
    color: Color.darkFontGrey,
    textAlign: "center",
    fontSize: FontSize.body12Medium_size,
    top: 0,
    position: "absolute",
  },
  ameliaBarlow: {
    top: 18,
    color: Color.colorWhite,
    fontSize: FontSize.body16Bold_size,
    left: 0,
    position: "absolute",
  },
  goodMorningParent: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 4,
    left: 55,
  },
  maskGroupParent: {
    width: 162,
    left: 0,
    top: 0,
    height: 44,
    position: "absolute",
  },
  vectorIcon: {
    width: 15,
    height: 18,
  },
  myFlat: {
    color: Color.colorWhite,
    fontSize: FontSize.body12Medium_size,
  },
  frameParent: {
    gap: Gap.gap_xs,
    flexDirection: "row",
    alignItems: "center",
  },
  vectorIcon1: {
    width: 10,
    height: 6,
  },
  frameWrapper: {
    top: 1,
    left: 227,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
  },
  groupParent: {
    top: 24,
    height: 44,
    width: 342,
    left: 24,
    position: "absolute",
  },
  frameChild: {
    width: 14,
    height: 14,
  },
  searchCategory: {
    fontSize: FontSize.body14Medium_size,
    color: Color.darkFontGrey,
    textAlign: "center",
  },
  frameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  homeDarkInner: {
    top: 92,
    padding: Padding.p_base,
    width: 342,
    left: 24,
  },
  frameItem: {
    height: 158,
    width: 342,
  },
  frameView: {
    left: -326,
    gap: Gap.gap_xs,
    flexDirection: "row",
  },
  categories: {
    fontSize: FontSize.heading18Bold_size,
    textAlign: "left",
    color: Color.colorWhite,
  },
  faceSavoringFood: {
    width: 17,
    height: 17,
  },
  categoriesParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAll: {
    top: "13.04%",
    left: "87.43%",
    color: Color.lightColorsPrimary,
    textAlign: "left",
    fontSize: FontSize.body14Medium_size,
  },
  frameGroup: {
    height: 23,
    left: 0,
    top: 0,
    width: 342,
    position: "absolute",
  },
  frameChild1: {
    width: 73,
    height: 73,
  },
  fruits: {
    fontSize: FontSize.body14Medium_size,
    color: Color.colorWhite,
  },
  groupParent1: {
    gap: Gap.gap_xs,
    alignItems: "center",
  },
  frameParent1: {
    top: 39,
    gap: Gap.gap_sm,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  groupView: {
    top: 348,
    height: 138,
    width: 342,
    left: 24,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_base,
    backgroundColor: Color.darkColorsDarkBG2,
    width: 163,
    left: 0,
    top: 0,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon: {
    left: 26,
    width: 112,
    height: 98,
  },
  h1: {
    textAlign: "left",
    fontSize: FontSize.body14Medium_size,
    color: Color.colorWhite,
  },
  h2: {
    color: Color.lightColorsSecondary,
    textAlign: "left",
    fontSize: FontSize.body16Bold_size,
  },
  frameWrapper1: {
    left: 16,
    width: 106,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  groupItem: {
    height: 36,
    width: 36,
  },
  plus1Icon: {
    top: 10,
    left: 10,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    left: 115,
    top: 166,
    position: "absolute",
  },
  groupParent4: {
    top: 549,
    width: 163,
    left: 24,
  },
  favpngRawMeatSteakBeefFooIcon: {
    left: 12,
    width: 139,
    height: 88,
  },
  frameWrapper2: {
    left: 19,
    width: 76,
  },
  groupParent5: {
    left: 203,
    top: 549,
    width: 163,
  },
  groupChild1: {
    left: 225,
    top: 33,
    height: 24,
    width: 24,
  },
  groupChild2: {
    left: 79,
  },
  groupChild3: {
    left: 0,
    top: 0,
    backgroundColor: Color.darkColorsDarkBG,
  },
  vectorIcon2: {
    height: "83.33%",
    width: "83.33%",
    top: "8.33%",
    right: "8.33%",
    bottom: "8.33%",
    left: "8.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent2: {
    left: 0,
  },
  groupChild4: {
    width: 44,
    height: 44,
  },
  text: {
    textAlign: "left",
    fontSize: FontSize.body14Medium_size,
    color: Color.colorWhite,
    left: 0,
    top: 0,
  },
  wrapper: {
    top: 37,
    left: 17,
    width: 9,
    height: 18,
    position: "absolute",
  },
  groupChild5: {
    height: "36.36%",
    top: "23.64%",
    bottom: "40%",
  },
  rectangleParent3: {
    left: 142,
    height: 55,
    width: 44,
    top: 0,
    position: "absolute",
  },
  groupChild6: {
    left: 304,
    top: 33,
    height: 24,
    width: 24,
  },
  groupParent6: {
    left: 32,
    width: 328,
    height: 60,
  },
  groupChild8: {
    backgroundColor: Color.lightColorsSecondary,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    borderRadius: Border.br_3xl,
    width: 18,
    left: 0,
    top: 0,
  },
  text1: {
    left: 4,
    textAlign: "left",
    fontSize: FontSize.body14Medium_size,
    color: Color.colorWhite,
    top: 0,
  },
  rectangleParent5: {
    top: 34,
    left: 13,
  },
  groupChild9: {
    height: "38.46%",
    top: "25%",
    bottom: "36.54%",
  },
  rectangleParent4: {
    left: 174,
    height: 52,
    width: 44,
  },
  seeAllParent: {
    height: "2.73%",
    width: "87.69%",
    top: "60.43%",
    right: "6.15%",
    bottom: "36.85%",
    left: "6.15%",
    position: "absolute",
  },
  homeDark: {
    borderRadius: Border.br_5xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.darkColorsDarkBG,
  },
});

export default HomeDark;
