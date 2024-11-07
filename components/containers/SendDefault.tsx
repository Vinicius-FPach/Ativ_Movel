import { View, Text, StyleSheet, Touchable } from "react-native";
import React, { ReactNode } from "react";
import {
  DEFAULT_PADDING,
} from "@/constants/globalStyles";

type SendProps = {
  title: string;
  children: ReactNode;
};

export default function Send({ title, children }: SendProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "aquamarine",
    padding: DEFAULT_PADDING,
    width: "100%",
    justifyContent: 'center',
  },
  title: {
    color: "springgreen",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf:"flex-start",
    marginBottom: 10,
  },
  Touchable:{
    flexDirection: 'row'
  }
  ,
  text: {
    alignItems:'flex-start',
  }
});
