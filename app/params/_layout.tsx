import { Stack } from 'expo-router';

export default function ParamsLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Lista de Usuários',
          headerStyle: { backgroundColor: '#8b5cf6' },
          headerTintColor: '#fff'
        }} 
      />
      <Stack.Screen 
        name="[id]" 
        options={{ 
          title: 'Detalhes do Usuário',
          headerStyle: { backgroundColor: '#8b5cf6' },
          headerTintColor: '#fff'
        }} 
      />
    </Stack>
  );
}