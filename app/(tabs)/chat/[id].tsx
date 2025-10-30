import { View, Text, TextInput, Pressable, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { Container } from "@/components/layout/container";

export default function ChatScreen() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: "1", text: "Selam! Nasılsın?", from: "ai" },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const newMessage = { id: Date.now().toString(), text: message, from: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    // Burada AI cevabını getireceğiz (şimdilik simülasyon)
    setTimeout(() => {
      const aiResponse = { id: Date.now().toString(), text: "Ben iyiyim Arda, sen nasılsın? 🤖", from: "ai" };
      setMessages((prev) => [...prev, aiResponse]);
    }, 800);
  };

  return (
    <Container>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            className={`max-w-[80%] px-4 py-2 mb-2 rounded-2xl ${
              item.from === "user" ? "bg-blue-600 self-end" : "bg-zinc-700 self-start"
            }`}
          >
            <Text className="text-white text-base">{item.text}</Text>
          </View>
        )}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
        <View className="flex-row items-center gap-3 bg-zinc-800 rounded-xl p-3 mt-2">
          <TextInput
            className="flex-1 text-white text-base"
            placeholder="Mesaj yaz..."
            placeholderTextColor="#9CA3AF"
            value={message}
            onChangeText={setMessage}
          />
          <Pressable
            className="bg-blue-600 px-4 py-2 rounded-lg active:opacity-80"
            onPress={sendMessage}
          >
            <Text className="text-white font-semibold">Gönder</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
}
