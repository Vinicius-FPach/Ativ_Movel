import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import {
  DEFAULT_GAP,
  DEFAULT_PADDING,
} from "@/constants/globalStyles";
import Coins from '@/components/checkout/Coins';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type CCardProps = {
  title: string;
  children: ReactNode;
};

export default function CheckCard({ title, children }: CCardProps) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="alpha-s-circle-outline" size={26} color="orange" />
      <Text style={styles.title}>{title}</Text>
      {children}
      <Coins></Coins>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    gap: DEFAULT_GAP,
    padding: 12,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  Dol: {
    borderWidth: 3,
    borderColor: 'orange',
    borderRadius: 20
  }

});
