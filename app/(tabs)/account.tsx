
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LogOut, Settings, HelpCircle, CreditCard, User } from 'lucide-react-native';

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.title}>Account</Text>
      </View>
      <View style={styles.profileRow}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            style={styles.avatar}
          />
        </View>
        <View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@email.com</Text>
        </View>
      </View>
      <View style={styles.menuList}>
        <MenuItem icon={<User color="#FF3008" size={22} />} label="Profile" />
        <MenuItem icon={<CreditCard color="#FF3008" size={22} />} label="Payment" />
        <MenuItem icon={<Settings color="#FF3008" size={22} />} label="Settings" />
        <MenuItem icon={<HelpCircle color="#FF3008" size={22} />} label="Help" />
        <MenuItem icon={<LogOut color="#FF3008" size={22} />} label="Log Out" last />
      </View>
    </SafeAreaView>
  );
}

function MenuItem({ icon, label, last }) {
  return (
    <TouchableOpacity
      style={[
        styles.menuItem,
        last && { borderBottomWidth: 0 },
      ]}
      activeOpacity={0.7}
    >
      <View style={styles.menuIcon}>{icon}</View>
      <Text style={styles.menuLabel}>{label}</Text>
    </TouchableOpacity>
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
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 12,
    marginBottom: 24,
  },
  avatarWrapper: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#fff',
    marginRight: 16,
    shadowColor: '#FF3008',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  profileName: {
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
    color: '#222',
    marginBottom: 2,
  },
  profileEmail: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#B0B0B0',
  },
  menuList: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginHorizontal: 18,
    marginTop: 8,
    paddingVertical: 8,
    shadowColor: '#FF3008',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  menuIcon: {
    marginRight: 16,
  },
  menuLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#222',
  },
});