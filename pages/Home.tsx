import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Button, StyleSheet, SafeAreaView, Dimensions, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

import { homeStyles as styles} from '../styles/HomeStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const jokes: string[] = [
  "Why do programmers hate nature? Because it has too many bugs.",
  "Why did the developer go broke? Because he used up all his cache.",
  "Why do Java developers wear glasses? Because they don’t C#.",
  "I would tell you a UDP joke, but you might not get it.",
  "Why did the functions stop calling each other? Because they had constant arguments."
];

export default function Home({ navigation }: Props) {
  const [currentJoke, setCurrentJoke] = useState<string>(jokes[0]);
  
  const nextJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setCurrentJoke(jokes[randomIndex]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.jokeText}>{currentJoke}</Text>

        <Pressable style={styles.jokeBtn} onPress={nextJoke}>
            <Text style={styles.jokeBtnText}>Next Joke</Text>
        </Pressable>

        <View style={{ height: 20 }} />
        {/* <Button title="About Page" onPress={() => navigation.navigate('About')} /> */}
        {/* <Button title="Login Page" onPress={() => navigation.navigate('Login')} /> */}
      </ScrollView>
    </SafeAreaView>
  );
}