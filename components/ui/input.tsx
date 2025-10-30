import { TextInput, TextInputProps } from "react-native";

export function Input({ className, ...props }: TextInputProps) {
  return (
    <TextInput
      className={`bg-zinc-800 text-white px-4 py-3 rounded-xl text-base border border-zinc-700 focus:border-blue-500 ${className}`}
      placeholderTextColor="#9CA3AF"
      {...props}
    />
  );
}
