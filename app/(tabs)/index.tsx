
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Clock, Star } from 'lucide-react-native';

const categories = [
  { id: '1', name: 'Fast Food', image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&q=80' },
  { id: '2', name: 'Pizza', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80' },
  { id: '3', name: 'Sushi', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80' },
  { id: '4', name: 'Mexican', image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=500&q=80' },
];

const restaurants = [
  {
    id: '1',
    name: 'Burger Palace',
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=500&q=80',
    rating: 4.8,
    deliveryTime: '20-30',
    deliveryFee: 2.99,
    tags: ['American', 'Burgers'],
  },
  {
    id: '2',
    name: 'Sushi Master',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80',
    rating: 4.9,
    deliveryTime: '25-35',
    deliveryFee: 3.99,
    tags: ['Japanese', 'Sushi'],
  },
  {
    id: '3',
    name: 'Pizza Heaven',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&q=80',
    rating: 4.7,
    deliveryTime: '30-40',
    deliveryFee: 1.99,
    tags: ['Italian', 'Pizza'],
  },
  {
    id: '4',
    name: 'Taco Fiesta',
    image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=500&q=80',
    rating: 4.6,
    deliveryTime: '25-35',
    deliveryFee: 2.49,
    tags: ['Mexican', 'Tacos'],
  },
  {
    id: '5',
    name: 'Thai Spice',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&q=80',
    rating: 4.8,
    deliveryTime: '35-45',
    deliveryFee: 3.49,
    tags: ['Thai', 'Spicy'],
  },
  {
    id: '6',
    name: 'Fresh Poke Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80',
    rating: 4.9,
    deliveryTime: '20-30',
    deliveryFee: 2.99,
    tags: ['Hawaiian', 'Healthy'],
  },
  {
    id: '7',
    name: 'BBQ King',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500&q=80',
    rating: 4.7,
    deliveryTime: '40-50',
    deliveryFee: 4.99,
    tags: ['BBQ', 'American'],
  },
];

export default function HomeScreen() {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderRestaurant = ({ item }) => (
    <TouchableOpacity style={styles.restaurantCard}>
      <Image source={{ uri: item.image }} style={styles.restaurantImage} />
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <Star size={16} color="#FF3008" fill="#FF3008" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
        <View style={styles.tagsContainer}>
          {item.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
              {index < item.tags.length - 1 ? ' • ' : ''}
            </Text>
          ))}
        </View>
        <View style={styles.deliveryInfo}>
          <Clock size={14} color="#86939E" />
          <Text style={styles.deliveryText}>{item.deliveryTime} min</Text>
          <Text style={styles.deliveryDot}>•</Text>
          <Text style={styles.deliveryFee}>${item.deliveryFee} delivery fee</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <MapPin size={20} color="#FF3008" />
          <Text style={styles.headerText}>Delivering to Home</Text>
        </View>

        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        />

        <Text style={styles.sectionTitle}>Popular Restaurants</Text>
        <FlatList
          data={restaurants}
          renderItem={renderRestaurant}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1C',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1C',
    marginTop: 24,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  categoriesList: {
    paddingHorizontal: 16,
  },
  categoryCard: {
    marginRight: 16,
    width: 100,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1C1C1C',
    textAlign: 'center',
  },
  restaurantCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantImage: {
    width: '100%',
    height: 200,
  },
  restaurantInfo: {
    padding: 16,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1C',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1C',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tag: {
    fontSize: 14,
    color: '#86939E',
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#86939E',
  },
  deliveryDot: {
    marginHorizontal: 8,
    color: '#86939E',
  },
  deliveryFee: {
    fontSize: 14,
    color: '#86939E',
  },
});