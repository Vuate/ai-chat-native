import { Pressable, Text, PressableProps } from "react-native";

interface ButtonProps extends PressableProps {
  label: string;
}

export function Button({ label, className, ...props }: ButtonProps) {
  return (
    <Pressable
      className={`bg-blue-600 active:opacity-80 rounded-xl px-4 py-3 ${className}`}
      {...props}
    >
      <Text className="text-white text-base font-semibold text-center">
        {label}
      </Text>
    </Pressable>
  );
}
