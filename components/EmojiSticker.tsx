import { View, Text } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};
const EmojiSticker = ({ imageSize, stickerSource }: Props) => {
  return (
    <View>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
};
export default EmojiSticker;
