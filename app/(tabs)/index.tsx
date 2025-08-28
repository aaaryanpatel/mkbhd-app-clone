import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor:"#fff"}} edges={["top"]}>
    <StatusBar barStyle="default" />

    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Liked" component={SettingsScreen} />
      <Tab.Screen name="Suggested" component={SettingsScreen} />

    </Tab.Navigator>
    
    </SafeAreaView>
    
  );
}

function HomeScreen() {
    return <View>
        <Text>Hi there form home screen</Text>
    </View>
}

function SettingsScreen() {
    return <View>
        <Text>Hi there form setting screen</Text>
    </View>
}

