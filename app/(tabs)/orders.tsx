
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.title}>Orders</Text>
      </View>
      <View style={styles.emptyState}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80' }}
          style={styles.emptyImage}
        />
        <Text style={styles.emptyText}>You have no orders yet.</Text>
        <Text style={styles.emptySubText}>Start exploring and order your favorite food!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF6F2',
  },
  header: {
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 24,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: '#222',
    letterSpacing: -0.5,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
  },
  emptyImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
    marginBottom: 18,
  },
  emptyText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
    color: '#222',
    marginBottom: 4,
  },
  emptySubText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    color: '#B0B0B0',
  },
});