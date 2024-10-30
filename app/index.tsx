import { Image, StyleSheet, View, Text, Platform } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
