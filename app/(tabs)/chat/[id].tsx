  import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { useState } from "react";

export default function ChatScreen() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    // Optionally, display AI greeting at start
    { id: "1", text: "Selam! Nasılsın?", from: "ai" },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const newUserMsg = { id: Date.now().toString(), text: message, from: "user" };
    setMessages(prev => [...prev, newUserMsg]);
    const queuedMsg = message;
    setMessage("");
    try {
      const response = await fetch("https://smartchat-backend-1f6sj9cbi-vuates-projects.vercel.app/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: queuedMsg }),
      });
      const data = await response.json();
      const aiResponse = {
        id: Date.now().toString(),
        text: data.reply || "Bir cevap alınamadı 🤖",
        from: "ai",
      };
      setMessages(prev => [...prev, aiResponse]);
    } catch {
      const failMsg = {
        id: Date.now().toString(),
        text: "Yapay zekadan cevap alınamadı ❌",
        from: "ai",
      };
      setMessages(prev => [...prev, failMsg]);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#18181b" }}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              alignSelf: item.from === "user" ? "flex-end" : "flex-start",
              backgroundColor: item.from === "user" ? "#2563eb" : "#27272a",
              marginBottom: 8,
              padding: 12,
              borderRadius: 16,
              maxWidth: "80%",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>{item.text}</Text>
          </View>
        )}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{ flex: 1, color: "#fff", backgroundColor: "#27272a", borderRadius: 12, padding: 12 }}
          placeholder="Mesaj yaz..."
          placeholderTextColor="#9CA3AF"
          value={message}
          onChangeText={setMessage}
        />
        <Pressable onPress={sendMessage} style={{ backgroundColor: "#2563eb", padding: 12, borderRadius: 12, marginLeft: 8 }}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Gönder</Text>
        </Pressable>
      </View>
    </View>
  );
}
