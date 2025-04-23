
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Pressable, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Star, Clock, ChevronRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const categories = [
  { name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=80' },
  { name: 'Burgers', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=200&q=80' },
  { name: 'Sushi', image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=200&q=80' },
  { name: 'Tacos', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80' },
  { name: 'Dessert', image: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=200&q=80' },
];

const restaurants = [
  {
    name: 'Pizza Palace',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviews: 1200,
    category: 'Pizza',
    time: '25-35 min',
    distance: '1.2 mi',
    delivery: 'Free',
  },
  {
    name: 'Burger Bros',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviews: 980,
    category: 'Burgers',
    time: '20-30 min',
    distance: '0.8 mi',
    delivery: '$2.99',
  },
  {
    name: 'Sushi World',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviews: 1500,
    category: 'Sushi',
    time: '30-40 min',
    distance: '2.1 mi',
    delivery: 'Free',
  },
  {
    name: 'Taco Town',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviews: 1100,
    category: 'Tacos',
    time: '15-25 min',
    distance: '1.5 mi',
    delivery: '$1.99',
  },
  {
    name: 'Sweet Treats',
    image: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviews: 900,
    category: 'Dessert',
    time: '10-20 min',
    distance: '0.5 mi',
    delivery: 'Free',
  },
];

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#FFF6F2', '#FFFFFF']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Location Header */}
          <View style={styles.headerRow}>
            <MapPin color="#FF3008" size={22} style={{ marginRight: 8 }} />
            <Text style={styles.headerLocation}>Deliver to</Text>
            <Text style={styles.headerAddress}>123 Main St</Text>
          </View>

          {/* Hero Title */}
          <Text style={styles.heroTitle}>Discover the best food near you</Text>

          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesRow}
          >
            {categories.map((cat, idx) => (
              <View key={cat.name} style={styles.categoryItem}>
                <Image source={{ uri: cat.image }} style={styles.categoryImage} />
                <Text style={styles.categoryLabel}>{cat.name}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Featured Restaurants */}
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionHeader}>Featured Restaurants</Text>
            <ChevronRight color="#FF3008" size={20} />
          </View>
          <View style={styles.restaurantList}>
            {restaurants.map((rest, idx) => (
              <Pressable
                key={rest.name}
                style={({ pressed }) => [
                  styles.restaurantCard,
                  pressed && { transform: [{ scale: 0.97 }], opacity: 0.95 },
                ]}
                android_ripple={{ color: '#FF300810' }}
              >
                <Image source={{ uri: rest.image }} style={styles.restaurantImage} />
                <View style={styles.restaurantInfo}>
                  <Text style={styles.restaurantName}>{rest.name}</Text>
                  <View style={styles.restaurantMetaRow}>
                    <Star color="#FFD700" size={16} fill="#FFD700" style={{ marginRight: 2 }} />
                    <Text style={styles.restaurantRating}>{rest.rating}</Text>
                    <Text style={styles.restaurantReviews}>({rest.reviews}) · {rest.category}</Text>
                  </View>
                  <View style={styles.restaurantMetaRow}>
                    <Clock color="#FF3008" size={15} style={{ marginRight: 2 }} />
                    <Text style={styles.restaurantTime}>{rest.time}</Text>
                    <Text style={styles.restaurantDistance}> · {rest.distance}</Text>
                    <Text style={styles.restaurantDelivery}> · {rest.delivery} delivery</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
    paddingTop: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 24,
    marginBottom: 2,
  },
  headerLocation: {
    fontFamily: 'Inter_600SemiBold',
    color: '#FF3008',
    fontSize: 15,
    marginRight: 6,
    marginLeft: 2,
  },
  headerAddress: {
    fontFamily: 'Inter_400Regular',
    color: '#222',
    fontSize: 15,
    fontWeight: '500',
  },
  heroTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: '#222',
    marginLeft: 24,
    marginTop: 8,
    marginBottom: 18,
    lineHeight: 34,
    letterSpacing: -0.5,
  },
  categoriesRow: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 18,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 18,
  },
  categoryImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
    marginBottom: 6,
    borderWidth: 2,
    borderColor: '#FFF',
    shadowColor: '#FF3008',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 2,
  },
  categoryLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: '#222',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginBottom: 8,
    marginTop: 8,
  },
  sectionHeader: {
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    color: '#222',
    letterSpacing: -0.5,
  },
  restaurantList: {
    paddingHorizontal: 12,
    gap: 18,
  },
  restaurantCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginBottom: 8,
    shadowColor: '#FF3008',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.10,
    shadowRadius: 16,
    elevation: 4,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 14,
    marginRight: 14,
    backgroundColor: '#F2F2F2',
  },
  restaurantInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  restaurantName: {
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
    color: '#222',
    marginBottom: 2,
  },
  restaurantMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  restaurantRating: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#222',
    marginLeft: 2,
    marginRight: 2,
  },
  restaurantReviews: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#888',
    marginLeft: 2,
  },
  restaurantTime: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#222',
    marginLeft: 2,
  },
  restaurantDistance: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#888',
  },
  restaurantDelivery: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: '#FF3008',
  },
});