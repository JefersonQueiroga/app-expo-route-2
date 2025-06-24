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
          <Text style={styles.buttonText}>📚 Stack Navigation</Text>
          <Text style={styles.buttonDescription}>Navegação em pilha - telas empilhadas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToTabs}>
          <Text style={styles.buttonText}>🗂️ Tab Navigation</Text>
          <Text style={styles.buttonDescription}>Navegação por abas na parte inferior</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToDrawer}>
          <Text style={styles.buttonText}>🍔 Drawer Navigation</Text>
          <Text style={styles.buttonDescription}>Menu lateral deslizante</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToParams}>
          <Text style={styles.buttonText}>🔗 Navegação com Parâmetros</Text>
          <Text style={styles.buttonDescription}>Passagem de dados entre telas</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#6366f1',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonDescription: {
    color: '#e2e8f0',
    fontSize: 14,
  },
});