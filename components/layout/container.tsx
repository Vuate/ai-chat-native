import { View, ViewProps } from "react-native";

export function Container({ children, className, ...props }: ViewProps) {
  return (
    <View className={`flex-1 bg-zinc-900 px-5 py-10 ${className}`} {...props}>
      {children}
    </View>
  );
}
