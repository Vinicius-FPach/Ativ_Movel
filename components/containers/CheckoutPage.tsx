import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import {
  DEFAULT_GAP,
  DEFAULT_PADDING,
} from "@/constants/globalStyles";

type CCardProps = {
  title: string;
  children: ReactNode;
};

export default function CheckCard({ title, children }: CCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    gap: DEFAULT_GAP,
    padding: 8,
    alignItems: 'flex-end',
    flex:1,
  },
  title: {
    color: 'gray',
    fontSize: 17,
  },
});
