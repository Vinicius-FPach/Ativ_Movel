import { View, Text, Button, StyleSheet, Pressable,  } from 'react-native'
import { Link, useRouter } from 'expo-router'
import React from 'react'

export default function index() {
  const router = useRouter();

  const Clique = () => {
    router.push("/segunda")
  }
  return (
    <View>
      <Button onPress={Clique}
      title="Clique Aqui"></Button>
      <Link href={{
          pathname: '../components/[id]',
          params: { id: Math.random() }
      }}>
      User
      </Link>
    </View>
  )
}