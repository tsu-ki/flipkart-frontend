import * as React from "react";
import { useState, useEffect } from "react";
import { Image as RNImage } from "react-native";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView, Button, ActivityIndicator } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding, Gap } from "../GlobalStyles";
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';


const API_URL = 'http://13.232.11.249:5000';

type FileUpload = {
  uri: string;
  type: string;
  name: string;
};

const getFileInfo = (uri: string): FileUpload => {
  const uriParts = uri.split('.');
  const fileType = uriParts[uriParts.length - 1];
  return {
    uri: uri,
    name: `image.${fileType}`,
    type: `image/${fileType}`,
  };
};

const GroceryDetails: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [extractedText, setExtractedText] = useState<string>("Loading...");
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      processImage(result.assets[0].uri);
    }
  };
  
  // const processImage = async (uri: string) => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const formData = new FormData();
  //     const fileUpload = getFileInfo(uri);
  //     formData.append('file', fileUpload as any);

  //     const response = await axios.post(`${API_URL}/analyze`, formData, {
  //       // headers: {
  //       //   'Content-Type': 'multipart/form-data',
  //       // },
  //       timeout: 10000, // Set a timeout
  //     });

  //     setResult(response.data);
  //   } catch (error) {
  //     console.error('Error processing image:', error);
  //     if (axios.isAxiosError(error)) {
  //       if (error.response) {
  //         // The request was made and the server responded with a status code
  //         // that falls out of the range of 2xx
  //         setError(`Server error: ${error.response.status} - ${error.response.data.message}`);
  //       } else if (error.request) {
  //         // The request was made but no response was received
  //         setError('No response from server. Please check your internet connection.');
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         setError(`Error: ${error.message}`);
  //       }
  //     } else {
  //       setError('An unexpected error occurred');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const processImage = async (uri: string) => {
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      const fileInfo = await FileSystem.getInfoAsync(uri);
      const fileType = uri.split('.').pop();
      
      formData.append('image', {
        uri: fileInfo.uri,
        name: `image.${fileType}`,
        type: `image/${fileType}`,
      } as any);
  
      const response = await axios.post(`${API_URL}/analyze`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 900000,
      });
  
      setResult(response.data);
  //   } catch (error) {
  //     console.error('Error processing image:', error);
  //     if (axios.isAxiosError(error)) {
  //       const axiosError = error as AxiosError;
  //       if (axiosError.response) {
  //         setError(`Server error: ${axiosError.response.status} - ${axiosError.response.data?.message || 'Unknown error'}`);
  //       } else if (axiosError.request) {
  //         setError('No response from server. Please check your internet connection.');
  //       } else {
  //         setError(`Error: ${axiosError.message}`);
  //       }
  //     } else {
  //       setError('An unexpected error occurred');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };
} catch (error: unknown) {
  console.error('Error processing image:', error);
  if (error && typeof error === 'object' && 'isAxiosError' in error) {
    const axiosError = error as {
      response?: { status: number; data: { message?: string } };
      request?: unknown;
      message?: string;
    };
    if (axiosError.response) {
      setError(`Server error: ${axiosError.response.status} - ${axiosError.response.data?.message || 'Unknown error'}`);
    } else if (axiosError.request) {
      setError('No response from server. Please check your internet connection.');
    } else {
      setError(`Error: ${axiosError.message}`);
    }
  } else {
    setError('An unexpected error occurred');
  }
} finally {
  setLoading(false);
}
};
  
//   const ResultDisplay: React.FC<{ result: any }> = ({ result }) => {
//     if (!result) {
//       return <Text>No result to display</Text>;
//     }

//     return (
//       <ScrollView style={styles.resultContainer}>
//         {result.filename && <Text style={styles.heading}>File: {result.filename}</Text>}
//         <View style={styles.imageContainer}>
//           {result.original_image && (
//             <View style={styles.imageWrapper}>
//               <Text style={styles.subheading}>Original Image</Text>
//               <Image 
//                 source={{uri: `data:image/jpeg;base64,${result.original_image}`}} 
//                 style={styles.resultImage} 
//               />
//             </View>
//           )}
//           {result.outlined_image && (
//             <View style={styles.imageWrapper}>
//               <Text style={styles.subheading}>Image with Color Change Outlines</Text>
//               <Image 
//                 source={{uri: `data:image/jpeg;base64,${result.outlined_image}`}} 
//                 style={styles.resultImage} 
//               />
//             </View>
//           )}
//           {result.color_bar && (
//             <View style={styles.imageWrapper}>
//               <Text style={styles.subheading}>Dominant Colors</Text>
//               <Image 
//                 source={{uri: `data:image/jpeg;base64,${result.color_bar}`}} 
//                 style={styles.resultImage} 
//               />
//             </View>
//           )}
//         </View>
//         {result.product_info && (
//           <View style={styles.productInfo}>
//             <Text style={styles.subheading}>Product Information:</Text>
//             {Object.entries(result.product_info as Record<string, unknown>).map(([key, value]) => {
//               if (key !== 'all_text') {
//                 if (key === 'nutritional_values' && typeof value === 'object' && value !== null) {
//                   return (
//                     <View key={key}>
//                       <Text style={styles.subheading}>Nutritional Information:</Text>
//                       {Object.entries(value as Record<string, unknown>).map(([nutrient, amount]) => (
//                         <Text key={nutrient}>{nutrient}: {String(amount)}</Text>
//                         ))}
//                     </View>
//                   );
//                 } else if (key === 'ingredients' && typeof value === 'string') {
//                   return (
//                     <View key={key}>
//                       <Text style={styles.subheading}>Ingredients:</Text>
//                       <Text>{value ? (Array.isArray(value) ? value.join(', ') : String(value)) : 'Not found'}</Text>
//                     </View>
//                   );
//                 } else {
//                   return <Text key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {String(value)}</Text>;
//                 }
//               }
//               return null;
//             })}
//           </View>
//         )}
//         {result.product_info && result.product_info.all_text && (
//           <View style={styles.allText}>
//             <Text style={styles.subheading}>All detected text:</Text>
//             <Text>{result.product_info.all_text}</Text>
//           </View>
//         )}
//       </ScrollView>
//     );
//   };

//   return (
//     <View style={styles.groceryDetails}>
//       <View style={styles.groupParent}>
//         <Pressable
//           style={styles.wrapper}
//           onPress={() => navigation.goBack()}
//           accessibilityLabel="Go back"
//         >
//           <Image
//             style={styles.icon}
//             source={require("../assets/group-367703.png")}
//             contentFit="cover"
//           />
//         </Pressable>
//         <Image
//           style={styles.groupChild}
//           source={require("../assets/group-367722.png")}
//           contentFit="cover"
//         />
//       </View>
//       <ScrollView>
//         <View style={styles.frameParent}>
//           <View style={styles.parentPosition}>
//             <Text style={[styles.groceryItem, styles.textTypo]}>Grocery Item</Text>
//             <Text style={[styles.price, styles.textTypo]}>Price: $X.XX</Text>
//           </View>
//         </View>
//         <View style={styles.extractedTextContainer}>
//           <Text style={styles.extractedText}>{extractedText}</Text>
//         </View>
//         <Button title="Pick an image from camera roll" onPress={pickImage} />
//         {image && <RNImage source={{ uri: image }} style={styles.pickedImage} />}
//         {loading && <ActivityIndicator size="large" color="#0000ff" />}
//         {result && <ResultDisplay result={result} />}
//     </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   groceryDetails: {
//     flex: 1,
//     backgroundColor: Color.colorWhite,
//   },
//   groupParent: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 24,
//   },
//   wrapper: {
//     width: 44,
//     height: 44,
//   },
//   icon: {
//     width: "100%",
//     height: "100%",
//   },
//   groupChild: {
//     width: 44,
//     height: 44,
//   },
//   frameParent: {
//     padding: 24,
//   },
//   parentPosition: {
//     gap: 8,
//   },
//   textTypo: {
//     fontFamily: FontFamily.body16Bold,
//     fontWeight: "700",
//     fontSize: FontSize.body16Bold_size,
//   },
//   groceryItem: {
//     color: Color.fontDark,
//   },
//   price: {
//     color: Color.lightColorsSecondary,
//   },
//   extractedTextContainer: {
//     padding: 24,
//     backgroundColor: Color.lightColorsLightBG,
//     borderRadius: Border.br_base,
//     margin: 24,
//   },
//   extractedText: {
//     fontFamily: FontFamily.body14Medium,
//     fontSize: FontSize.body14Medium_size,
//     color: Color.fontDark,
//   },
//   pickedImage: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     marginVertical: 10,
//   },
//   resultContainer: {
//     flex: 1,
//     width: '100%',
//     padding: 24,
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subheading: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//     marginBottom: 5,
//   },
//   imageContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   imageWrapper: {
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   resultImage: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//   },
//   productInfo: {
//     marginTop: 20,
//   },
//   allText: {
//     marginTop: 20,
//   },
// });

// export default GroceryDetails;
const ResultDisplay: React.FC<{ result: any }> = ({ result }) => {
  if (!result) return null;

  const formatKey = (key: string) => {
    return key.split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <View style={styles.resultContainer}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          {/* Original Image Section */}
          <View style={[styles.frameContainer, styles.groupItemBorder]}>
            <View style={styles.groupParent1}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-36850.png")}
              />
              <View style={styles.parent}>
                <Text style={[styles.text1, styles.textTypo]}>Original Image</Text>
                {result.original_image && (
                  <Image
                    source={{uri: `data:image/jpeg;base64,${result.original_image}`}}
                    style={styles.resultImage}
                  />
                )}
              </View>
            </View>
          </View>

          {/* Outlined Image Section */}
          <View style={[styles.frameContainer, styles.groupItemBorder]}>
            <View style={styles.groupParent1}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/group-36850.png")}
              />
              <View style={styles.parent}>
                <Text style={[styles.text1, styles.textTypo]}>Processed Image</Text>
                {result.outlined_image && (
                  <Image
                    source={{uri: `data:image/jpeg;base64,${result.outlined_image}`}}
                    style={styles.resultImage}
                  />
                )}
              </View>
            </View>
          </View>
        </View>

        {/* Product Information Section */}
        {result.product_info && (
          <View style={[styles.infoSection, styles.groupItemBorder]}>
            <Text style={[styles.sectionTitle, styles.textTypo]}>Product Information</Text>

            {Object.entries(result.product_info).map(([key, value]) => {
              if (value === null || key === 'all_text') return null;

              if (key === 'nutritional_values' && typeof value === 'object' && value !== null) {
                return (
                  <View key={key} style={styles.infoBlock}>
                    <Text style={[styles.infoTitle, styles.textTypo]}>Nutritional Values</Text>
                    {Object.entries(value as Record<string, unknown>).map(([nutrient, amount]) => (
                      <Text key={nutrient} style={styles.infoText}>
                        {formatKey(nutrient)}: {String(amount)}
                      </Text>
                    ))}
                  </View>
                );
              }
              return (
                <Text key={key} style={styles.infoText}>
                  {formatKey(key)}: {String(value)}
                </Text>
              );
            })}

            {/* Display all_text at the end if it exists */}
            {result.product_info.all_text && (
              <View style={styles.infoBlock}>
                <Text style={[styles.infoTitle, styles.textTypo]}>All Detected Text</Text>
                <Text style={styles.infoText}>{result.product_info.all_text}</Text>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

return (
  <ScrollView style={styles.groceryDetails}>
    <View style={styles.groupParent}>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.goBack()}
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

    <View style={styles.mainContent}>
      {!image && (
        <Text style={[styles.instructions, styles.textTypo]}>
          Select an image to analyze the product
        </Text>
      )}
      
      {image && <RNImage source={{ uri: image }} style={styles.selectedImage} />}
      
      <Pressable
        style={styles.analyzeButton}
        onPress={pickImage}
      >
        <Text style={[styles.buttonText, styles.textTypo]}>
          {image ? 'Select Another Image' : 'Select Image'}
        </Text>
      </Pressable>

      {loading && <ActivityIndicator size="large" color={Color.lightColorsPrimary} style={styles.loader} />}
      {error && <Text style={styles.error}>{error}</Text>}
      {result && <ResultDisplay result={result} />}
    </View>
  </ScrollView>
);
};

const styles = StyleSheet.create({
groceryDetails: {
  flex: 1,
  backgroundColor: Color.colorWhite,
},
wrapperLayout: {
  width: 44,
  height: 44,
},
groupParent: {
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 24,
},
wrapper: {
  justifyContent: "center",
  alignItems: "center",
},
icon: {
  width: "100%",
  height: "100%",
},
groupChild: {
  width: 44,
  height: 44,
},
mainContent: {
  padding: 24,
},
instructions: {
  textAlign: "center",
  marginBottom: 20,
  color: Color.lightFontGrey,
},
selectedImage: {
  width: "100%",
  height: 250,
  resizeMode: "contain",
  marginBottom: 20,
  borderRadius: Border.br_base,
},
analyzeButton: {
  backgroundColor: Color.lightColorsPrimary,
  borderRadius: Border.br_81xl,
  paddingVertical: Padding.p_base,
  paddingHorizontal: Padding.p_5xs,
  alignItems: "center",
  marginBottom: 20,
},
buttonText: {
  color: Color.colorWhite,
  fontSize: FontSize.body16Bold_size,
},
loader: {
  marginVertical: 20,
},
error: {
  color: "red",
  textAlign: "center",
  marginVertical: 10,
},
resultContainer: {
  marginTop: 20,
},
frameParent: {
  gap: Gap.gap_sm,
},
frameGroup: {
  flexDirection: "row",
  gap: Gap.gap_sm,
  flexWrap: "wrap",
  justifyContent: "space-between",
},
frameContainer: {
  flex: 1,
  minWidth: "48%",
  borderRadius: Border.br_base,
  padding: Padding.p_base,
  backgroundColor: Color.lightColorsLightBG,
},
groupItemBorder: {
  borderWidth: 1,
  borderColor: Color.colorWhitesmoke_100,
  borderStyle: "solid",
},
groupParent1: {
  gap: Gap.gap_sm,
},
frameChild: {
  width: 35,
  height: 35,
},
parent: {
  gap: Gap.gap_2xs,
},
textTypo: {
  fontFamily: FontFamily.body16Bold,
  fontWeight: "700",
  fontSize: FontSize.body16Bold_size,
},
text1: {
  color: Color.lightColorsPrimary,
},
resultImage: {
  width: "100%",
  height: 150,
  resizeMode: "contain",
},
infoSection: {
  padding: Padding.p_base,
  marginTop: 20,
  backgroundColor: Color.lightColorsLightBG,
  borderRadius: Border.br_base,
},
sectionTitle: {
  color: Color.lightColorsPrimary,
  marginBottom: 10,
},
infoBlock: {
  marginTop: 10,
},
infoTitle: {
  color: Color.lightFontDark,
  marginBottom: 5,
},
infoText: {
  fontFamily: FontFamily.body14Medium,
  fontSize: FontSize.body14Medium_size,
  color: Color.lightFontGrey,
  marginBottom: 5,
},
});

export default GroceryDetails;
