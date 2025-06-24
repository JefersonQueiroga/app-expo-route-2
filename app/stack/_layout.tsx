import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Stack - Tela 1',
          headerStyle: { backgroundColor: '#dc2626' },
          headerTintColor: '#fff'
        }} 
      />
      <Stack.Screen 
        name="screen2" 
        options={{ 
          title: 'Stack - Tela 2',
          headerStyle: { backgroundColor: '#dc2626' },
          headerTintColor: '#fff'
        }} 
      />
      <Stack.Screen 
        name="screen3" 
        options={{ 
          title: 'Stack - Tela 3',
          headerStyle: { backgroundColor: '#dc2626' },
          headerTintColor: '#fff'
        }} 
      />
    </Stack>
  );
}