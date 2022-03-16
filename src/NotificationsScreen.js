import React from "react";
import { View, Button } from "react-native";

export default function NotificationsScreen({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}