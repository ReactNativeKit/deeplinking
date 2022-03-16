import React from "react";
import { View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile", { id: 1 })}
      />
    </View>
  );
}