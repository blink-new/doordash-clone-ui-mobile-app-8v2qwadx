
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, CreditCard, Heart, Settings, HelpCircle } from 'lucide-react-native';

export default function AccountScreen() {
  const menuItems = [
    { icon: User, title: 'Profile', subtitle: 'Edit your profile information' },
    { icon: CreditCard, title: 'Payment', subtitle: 'Manage payment methods' },
    { icon: Heart, title: 'Favorites', subtitle: 'View your favorite restaurants' },
    { icon: Settings, title: 'Settings', subtitle: 'App preferences and notifications' },
    { icon: HelpCircle, title: 'Help', subtitle: 'Get support and send feedback' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <View style={styles.avatar}>
              <User size={32} color="#666666" />
            </View>
            <View>
              <Text style={styles.name}>Sign in</Text>
              <Text style={styles.subtitle}>for a better experience</Text>
            </View>
          </View>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <item.icon size={24} color="#666666" />
              <View style={styles.menuItemText}>
                <Text style={styles.menuItemTitle}>{item.title}</Text>
                <Text style={styles.menuItemSubtitle}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
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
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FF3008',
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    gap: 16,
  },
  menuItemText: {
    flex: 1,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  menuItemSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
});