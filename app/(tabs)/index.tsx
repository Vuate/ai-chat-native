import { View, Text, FlatList, Pressable } from "react-native";
import { Container } from "@/components/layout/container";
import { useRouter } from "expo-router"; // ✅ 1. eklendi

const chats = [
  { id: "1", name: "Lale", lastMessage: "Naber kanka 😂", time: "12:45" },
  { id: "2", name: "Cenk", lastMessage: "Yarın görüşürüz 💻", time: "10:12" },
  { id: "3", name: "Atahan", lastMessage: "Kahveye geliyor musun?", time: "Dün" },
];

export default function ChatListScreen() {
  const router = useRouter(); // ✅ 2. eklendi

  return (
    <Container>
      <Text className="text-2xl font-bold text-white mb-6">Sohbetler 💬</Text>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            className="flex-row items-center justify-between bg-zinc-800 rounded-xl p-4 mb-3 active:opacity-80"
            onPress={() => router.push({ pathname: "/(tabs)/chat/[id]", params: { id: item.id } })}
          >
            <View>
              <Text className="text-lg font-semibold text-white">{item.name}</Text>
              <Text className="text-zinc-400">{item.lastMessage}</Text>
            </View>
            <Text className="text-zinc-500">{item.time}</Text>
          </Pressable>
        )}
      />
    </Container>
  );
}
