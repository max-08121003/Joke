import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

type Props = {
  onFinish: () => void;
};

export default function SplashScreen({ onFinish }: Props) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>😂 Joke App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'regular',
    color: '#fff',
    textTransform: 'uppercase'
  },
});
