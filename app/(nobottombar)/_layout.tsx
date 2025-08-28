import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
    return (
        <View>
        <SafeAreaView>

        <View style={{backgroundColor: "black"}}>
            <Text style={{color: "white"}}>Go back</Text>
        </View>
        </SafeAreaView>
        
        </View>
    );

}