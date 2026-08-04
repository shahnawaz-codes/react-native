import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900 px-6">
      <Text className="text-3xl font-bold text-white text-center mb-3">
        Fresh Start ✨
      </Text>
      <Text className="text-lg font-medium text-sky-400 text-center">
        NativeWind v5 is ready!
      </Text>
    </View>
  );
}
