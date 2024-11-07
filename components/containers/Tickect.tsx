import { View, Text, StyleSheet, Alert } from "react-native";
import React, { ReactNode } from "react";
import {
  DEFAULT_GAP,
  DEFAULT_PADDING,
} from "@/constants/globalStyles";
import Ionicons from '@expo/vector-icons/Ionicons';
import TickectOp from '@/components/checkout/TicketOp';
import TickectButton from "@/components/checkout/TicketOp";

type TCardProps = {
  title: string;
  children: ReactNode;
};

export default function Ticket({ title, children }: TCardProps) {

  

  return (
    <View style={styles.container}>
      <Ionicons name="ticket-outline" size={28} color="orangered" style = {styles.Dol}/>
      <Text style={styles.title}>{title}</Text>
      {children}
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
    transform: [{rotate:'225deg'}]
  }

});
