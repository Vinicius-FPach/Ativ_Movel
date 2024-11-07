import { View, Text } from 'react-native'
import React from 'react'
import { useGlobalSearchParams } from 'expo-router'

export default function Id() {
    const { id } = useGlobalSearchParams();

  return (
    <View>
      <Text>Id User: {id}</Text>
    </View>
  )
}