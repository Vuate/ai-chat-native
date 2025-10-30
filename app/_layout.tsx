import "../global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="auth/login">
      <Stack.Screen name="auth/login" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
