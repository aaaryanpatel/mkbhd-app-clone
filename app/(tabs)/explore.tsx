import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function explore() {
    return <SafeAreaView>
        <Text>explore page</Text>
        <Link href={"/accountinfo"}>
            <Text>Account Informaion</Text>
        </Link>
    </SafeAreaView>
}  