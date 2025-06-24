import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

interface TabIconProps {
  color: string;
  size: number;
}

export default function TabLayout() {
  function HomeIcon({ color, size }: TabIconProps) {
    return <Ionicons name="home" size={size} color={color} />;
  }

  function PersonIcon({ color, size }: TabIconProps) {
    return <Ionicons name="person" size={size} color={color} />;
  }

  function SettingsIcon({ color, size }: TabIconProps) {
    return <Ionicons name="settings" size={size} color={color} />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#10b981',
        tabBarInactiveTintColor: '#6b7280',
        headerStyle: { backgroundColor: '#10b981' },
        headerTintColor: '#fff',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: PersonIcon,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Configurações',
          tabBarIcon: SettingsIcon,
        }}
      />
    </Tabs>
  );
}