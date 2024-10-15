import { View, Text, TextInput, StyleSheet, Button,Alert } from 'react-native'
import React, { useState } from 'react'

export default function Login(){
  
    const [text, onChangeText] = React.useState('Digite aqui o texto');
    const [number, onChangeNumber] = React.useState('');

    return (
        <view>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                />
            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            keyboardType="numeric"
            placeholder="Senha"
            secureTextEntry={true}
            />
            <Button
            title="mostrar"
            onPress={() => console.log('teste')}
            />
        </view>
    );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});