import { View, Text,} from 'react-native'
import { Stack} from 'expo-router'

import React from 'react'

export default function layout() {
  return (
      <Stack >
        <Stack.Screen
    name="Home"
    options={{ title: 'Awesome app' }}
  />
  <Stack.Screen
    name="Profile"
    options={{ title: 'My profile' }}
  />
      </Stack>
  )}

