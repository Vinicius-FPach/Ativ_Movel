import {
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import { DEFAULT_RADIUS } from "@/constants/globalStyles";
  
  type TicketButtonProps = {
    onPress: () => void;
    customTitle?: string;
  };
  
  export default function TickectButton({
    onPress,
    customTitle = "Ticket!",
  }: TicketButtonProps) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{customTitle}</Text>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: "flex-end",
      justifyContent: "center",
    },
    text: {
      marginRight: 20,
      fontSize: 14,
      color: "gray",
      fontWeight: "bold",
    },
  });
  