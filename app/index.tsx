import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  function navigateToStack() {
    router.push('/stack');
  }

  function navigateToTabs() {
    router.push('/tabs');
  }

  function navigateToDrawer() {
    router.push('/drawer');
  }

  function navigateToParams() {
    router.push('/params');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Demonstração Expo Router</Text>
        <Text style={styles.subtitle}>Escolha o tipo de navegação para explorar:</Text>

        <TouchableOpacity style={styles.button} onPress={navigateToStack}>
          <Text style={styles.buttonText}>Stack Navigation</Text>
          <Text style={styles.buttonDescription}>Navegação em pilha - telas empilhadas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToTabs}>
          <Text style={styles.buttonText}>Tab Navigation</Text>
          <Text style={styles.buttonDescription}>Navegação por abas na parte inferior</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToDrawer}>
          <Text style={styles.buttonText}>Drawer Navigation</Text>
          <Text style={styles.buttonDescription}>Menu lateral deslizante</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToParams}>
          <Text style={styles.buttonText}>Navegacao com Parâmetros</Text>
          <Text style={styles.buttonDescription}>Passagem de dados entre telas</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f23',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff', 
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#a1a1aa', 
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1e1e2e', 
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#374151', 
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonDescription: {
    color: '#9ca3af', 
    fontSize: 14,
  },
});