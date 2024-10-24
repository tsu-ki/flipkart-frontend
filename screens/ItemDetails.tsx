import * as React from "react";
import { Image } from "expo-image";
import { useState } from "react";
import { StyleSheet, Pressable, View, Text, ScrollView, ActivityIndicator} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Padding,
  Gap,
} from "../GlobalStyles";

const API_URL = 'http://13.202.99.24:5000';

interface DetectionResult {
  confidence: number;
  expiry_date: string;
  fruit_class: string;
  shelf_life: {
    estimated_days: number;
    freezer: string;
    refrigerator: string;
    shelf: string;
  };
}

const ItemDetails = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [detectionResult, setDetectionResult] = useState<DetectionResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0);

   const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      detectFruit(result.assets[0].uri);
    }
  };

  const detectFruit = async (uri: string) => {
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: uri,
        type: 'image/jpeg',
        name: 'image.jpg',
      } as any);

      const response = await axios.post(`${API_URL}/detect_fruit`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000,
      });

      setDetectionResult(response.data);
      setCount(1);
    } catch (error) {
      console.error('Error detecting fruit:', error);
      setError('An error occurred while detecting the fruit. Please try again.');
      setCount(0);
    } finally {
      setLoading(false);
    }
  };
  const incrementCount = () => {
    if (detectionResult) { 
      setCount(prev => prev + 1);
    }
  };

  const decrementCount = () => {
    if (detectionResult && count > 1) { 
      setCount(prev => prev - 1);
    }
  };

  return (
    <ScrollView style={styles.itemDetails}>
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Items")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-36770.png")}
          />
        </Pressable>
        <Image
          style={[styles.groupChild, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/group-36772.png")}
        />
      </View>
      <Image
        style={styles.pngfuel3Icon}
        contentFit="cover"
        source={require("../assets/object.png")}
      />
      <Pressable
  style={[styles.continueWrapper, styles.rectangleViewBg]}
  onPress={() => 
    navigation.navigate("Cart", {
      cartItem: {
        fruitName: detectionResult ? detectionResult.fruit_class : "Fruit",
        count: count
      }
    })
  }
>
  <Text style={[styles.continue, styles.textTypo1]}>Add to cart</Text>
</Pressable>
      <View style={[styles.groupContainer, styles.frameParentPosition]}>
        <View style={styles.h2Parent}>
          <Text style={[styles.h2, styles.h2Typo]}>Count: {count}</Text>
          <View style={styles.h1Parent}>
            <Text style={[styles.h1, styles.h2Typo]}>
              {detectionResult ? detectionResult.fruit_class : "Fruit"}
            </Text>
            <View style={[styles.frameWrapper, styles.frameLayout]}>
              <View style={[styles.frameView, styles.frameLayout]}>
              <Pressable
                  style={[styles.counterButton, styles.groupItemBorder]}
                  onPress={decrementCount}
                  disabled={!detectionResult || count <= 1}
                >
                  <Text style={[styles.counterText, !detectionResult || count <= 1 ? styles.disabledText : null]}>-</Text>
                </Pressable>
                <Text style={styles.countText}>{count}</Text>
                <Pressable
                  style={[styles.counterButton, styles.groupItemBorder]}
                  onPress={incrementCount}
                  disabled={!detectionResult}
                >
                  <Text style={[styles.counterText, !detectionResult ? styles.disabledText : null]}>+</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.gingerIsA, styles.text4Typo]}>
          {detectionResult ? (
            `Image format: JPEG, Confidence: ${detectionResult.confidence.toFixed(4)},
            Estd: ${detectionResult.shelf_life.estimated_days} days, Freezer: ${detectionResult.shelf_life.freezer}, 
            Refrigerator: ${detectionResult.shelf_life.refrigerator}, Shelf: ${detectionResult.shelf_life.shelf}`
          ) : (
            "Tap 'Detect Freshness' to analyze this fruit"
          )}
        </Text>
      </View>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.frameGroup}>
          <View style={[styles.frameContainer, styles.groupItemBorder]}>
            <View style={styles.groupParent1}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-36850.png")}
              />
              <View style={styles.parent}>
                <Text style={[styles.text1, styles.textTypo]}>Fruit Class</Text>
                <Text style={[styles.organic, styles.text4Typo]}>
                  {detectionResult ? detectionResult.fruit_class : "N/A"}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.groupItemBorder]}>
            <View style={styles.groupParent1}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-368501.png")}
              />
              <View style={styles.parent}>
                <Text style={[styles.text1, styles.textTypo]}>Expiration</Text>
                <Text style={[styles.organic, styles.text4Typo]}>
                  {detectionResult ? detectionResult.expiry_date : "N/A"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={[styles.frameContainer, styles.groupItemBorder]}>
            <View style={styles.groupParent1}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-368502.png")}
              />
              <View style={styles.parent}>
                <Text style={styles.text2}>
                  <Text style={[styles.text1, styles.textTypo]}>Confidence</Text>
                </Text>
                <Text style={[styles.organic, styles.text4Typo]}>
                  {detectionResult ? detectionResult.confidence.toFixed(4) : "N/A"}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameContainer, styles.groupItemBorder]}>
            <View style={styles.groupParent1}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-368503.png")}
              />
              <View style={styles.parent}>
                <Text style={[styles.text1, styles.textTypo]}>Shelf Life</Text>
                <Text style={[styles.organic, styles.text4Typo]}>
                  {detectionResult ? `Estd: ${detectionResult.shelf_life.estimated_days} days` : "N/A"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.detectFreshnessButton, styles.rectangleViewBg]}
        onPress={pickImage}
      >
        <Text style={[styles.continue, styles.textTypo1]}>Detect Freshness</Text>
      </Pressable>
      {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />}
      {error && <Text style={styles.error}>{error}</Text>}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  wrapperLayout: {
    width: 44,
    top: 0,
    height: 44,
    position: "absolute",
  },
  rectangleViewBg: {
    backgroundColor: Color.lightColorsPrimary,
    borderRadius: Border.br_81xl,
  },
  textTypo1: {
    textAlign: "center",
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
  },
  frameParentPosition: {
    left: 24,
    position: "absolute",
  },
  h2Typo: {
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 116,
    height: 36,
    top: 0,
    position: "absolute",
  },
  groupItemBorder: {
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  text4Typo: {
    color: Color.lightFontGrey,
    fontFamily: FontFamily.body14Medium,
    fontWeight: "500",
  },
  textTypo: {
    color: Color.lightColorsPrimary,
    fontFamily: FontFamily.body16Bold,
    fontWeight: "700",
    fontSize: FontSize.body16Bold_size,
  },
  itemDetailsChild: {
    top: -530,
    left: -258,
    width: 906,
    height: 906,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 0,
  },
  groupChild: {
    left: 298,
  },
  groupParent: {
    top: 24,
    height: 44,
    width: 342,
    left: 24,
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
    color: Color.colorWhite,
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
  },
  h1: {
    top: 2,
    fontSize: FontSize.heading24Bold_size,
    color: Color.fontDark,
    textAlign: "left",
  },
  groupItem: {
    backgroundColor: Color.lightColorsLightBG,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    borderRadius: Border.br_81xl,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupInner: {
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
  groupWrapper: {
    width: 36,
    height: 36,
  },
  text: {
    fontSize: FontSize.heading18Bold_size,
    color: Color.lightFontDark,
  },
  rectangleView: {
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
  frameView: {
    gap: Gap.gap_sm,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
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
  groupContainer: {
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
  groupParent1: {
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
  itemDetails: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
  detectFreshnessButton: {
    marginTop: 350,
    marginBottom: 20,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    width: 342,
    alignSelf: "center",
  },
  loader: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  counterButton: {
    width: 36,
    height: 36,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightColorsLightBG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: FontSize.heading20Bold_size,
    color: Color.lightColorsPrimary,
    fontFamily: FontFamily.body16Bold,
    fontWeight: '700',
  },
  disabledText: {
    color: Color.lightFontGrey,
  },
  countText: {
    fontSize: FontSize.heading18Bold_size,
    color: Color.lightFontDark,
    fontFamily: FontFamily.body16Bold,
    fontWeight: '700',
    marginHorizontal: 16,
  },
  frameViewCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ItemDetails;
