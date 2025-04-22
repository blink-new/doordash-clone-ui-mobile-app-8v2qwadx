
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, ChevronDown } from 'lucide-react-native';

const categories = [
  { id: '1', name: 'Restaurants', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=200&h=200&fit=crop' },
  { id: '2', name: 'Grocery', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop' },
  { id: '3', name: 'Convenience', image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=200&h=200&fit=crop' },
  { id: '4', name: 'Alcohol', image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=200&h=200&fit=crop' },
];

const restaurants = [
  {
    id: '1',
    name: 'Burger House',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop',
    rating: 4.5,
    deliveryTime: '20-30 min',
    deliveryFee: '$2.99',
  },
  {
    id: '2',
    name: 'Sushi Master',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&h=300&fit=crop',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: '$3.99',
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
        <View style={styles.restaurantDetails}>
          <Text style={styles.restaurantRating}>★ {item.rating}</Text>
          <Text style={styles.restaurantDeliveryTime}>{item.deliveryTime}</Text>
          <Text style={styles.restaurantDeliveryFee}>{item.deliveryFee} delivery</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <MapPin size={20} color="#FF3008" />
            <Text style={styles.locationText}>Home</Text>
            <ChevronDown size={20} color="#000" />
          </View>
        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        <View style={styles.restaurantsContainer}>
          <Text style={styles.sectionTitle}>Popular Restaurants</Text>
          {restaurants.map(restaurant => (
            <View key={restaurant.id}>
              {renderRestaurant({ item: restaurant })}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  categoriesContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#000000',
  },
  categoriesList: {
    gap: 16,
  },
  categoryCard: {
    width: 100,
    marginRight: 12,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#000000',
  },
  restaurantsContainer: {
    padding: 16,
  },
  restaurantCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantImage: {
    width: '100%',
    height: 180,
  },
  restaurantInfo: {
    padding: 12,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
    color: '#000000',
  },
  restaurantDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  restaurantRating: {
    fontSize: 14,
    color: '#666666',
  },
  restaurantDeliveryTime: {
    fontSize: 14,
    color: '#666666',
  },
  restaurantDeliveryFee: {
    fontSize: 14,
    color: '#666666',
  },
});