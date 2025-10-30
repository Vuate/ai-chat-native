import { View, Text } from "react-native";
import { router } from "expo-router";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function LoginScreen() {
 return(
<Container>
<View className="flex-1 items-center justify-center gap-6">
 <Text className="text-3xl font-bold text-white mb-4 ">Smart Chat</Text>
 
 <Input placeholder="Email" keyboardType="email-address" />
 <Input placeholder="password" secureTextEntry />


 <Button label="login" onPress={() => router.replace("/(tabs)")} />


</View>

</Container>

 );   
}