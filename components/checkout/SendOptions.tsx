import {
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import { DEFAULT_RADIUS } from "@/constants/globalStyles";
  
  type SendOptionsProps = {
    onPress: () => void;
    customTitle?: string;
  };
  
  export default function SendOptions({
    onPress,
    customTitle = "Send!",
  }: SendOptionsProps) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{customTitle}</Text>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "aquamarine",
      alignItems: "flex-end",
      justifyContent: "center",
      padding: 8,
      minHeight: 64,
      opacity: 0.5,
      flex: 1,
    },
    
    text: {
      color: "black",
      fontWeight: "bold",
    },
  });
  