import {
  View,
  Text,
  FlatList,
  Platform,
  StyleSheet,
  Pressable,
} from "react-native";
import { useState } from "react";
import { Image, type ImageSource } from "expo-image";

interface Props {
  onSelect: (image: ImageSource) => void;
  onCloseModel: () => void;
}

const EmojiList = ({ onCloseModel, onSelect }: Props) => {
  const [emojiList] = useState<ImageSource[]>([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
  ]);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emojiList}
      contentContainerStyle={styles.listContainer}
      renderItem={({ index, item, separators }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModel();
          }}
        >
          <Image source={item} style={styles.image} key={index} />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
export default EmojiList;
