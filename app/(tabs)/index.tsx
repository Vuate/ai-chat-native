import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";


export default function HomeScreen() {

  return (
<SafeAreaView className="flex-1 bg-zinc-900">
<StatusBar style="light" />
<View className="flex-1 items-center justify-center">
  <Text className="text-3xl font-bold text-white">SmartChat</Text>
  <Text className="text-zinc-400 mt-2">Welcome to SmartChat</Text>
  </View>  
</SafeAreaView>

  )
}