// app/(tabs)/account.tsx
import { DownloadPicture } from "@/components/BottomSheet";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1}}>

      <Text>Accounts page</Text>
      <Button
        title="Open Bottom Sheet"
        onPress={() => {
          setPictureOpen(true);
        }}
        />
      {pictureOpen && <DownloadPicture />}
        </View>
    </SafeAreaView>
  );
}
