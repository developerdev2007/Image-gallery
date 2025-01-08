import { Image, ImageSource } from "expo-image";
import { sortRoutes } from "expo-router/build/sortRoutes";
import { View, Text, StyleSheet } from "react-native";
interface props {
  imageSource: ImageSource;
  selectedImage?: string;
}
const ImageViewer = ({ imageSource, selectedImage }: props) => {
  // const image = selectedImage ? selectedImage : imageSource;
  // return <Image source={} style={style.image} />;
  const imgSource = selectedImage ? { uri: selectedImage } : imageSource;

  return <Image source={imgSource} style={style.image} />;
};

const style = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
export default ImageViewer;
