import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Navegação Expo Router',
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff'
        }} 
      />
      <Stack.Screen 
        name="stack" 
        options={{ 
          title: 'Stack Navigation',
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff'
        }} 
      />
      <Stack.Screen 
        name="tabs" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="drawer" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="params" 
        options={{ 
          title: 'Navegação com Parâmetros',
          headerStyle: { backgroundColor: '#6366f1' },
          headerTintColor: '#fff'
        }} 
      />
    </Stack>
  );
}