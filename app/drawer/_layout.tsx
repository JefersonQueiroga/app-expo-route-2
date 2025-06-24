import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Drawer - Home',
            headerStyle: { backgroundColor: '#f59e0b' },
            headerTintColor: '#fff',
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: 'Sobre',
            title: 'Drawer - Sobre',
            headerStyle: { backgroundColor: '#f59e0b' },
            headerTintColor: '#fff',
          }}
        />
        <Drawer.Screen
          name="contact"
          options={{
            drawerLabel: 'Contato',
            title: 'Drawer - Contato',
            headerStyle: { backgroundColor: '#f59e0b' },
            headerTintColor: '#fff',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}