import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabHome() {
  const router = useRouter();

  function goBackToMenu() {
    router.push('/');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Navigation - Home</Text>
      <Text style={styles.description}>
        Esta é a navegação por abas. Você pode alternar 
        entre as diferentes seções usando as abas na parte inferior.
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Como funciona:</Text>
        <Text style={styles.infoText}>• Toque nas abas para navegar</Text>
        <Text style={styles.infoText}>• Cada aba mantém seu próprio estado</Text>
        <Text style={styles.infoText}>• Ideal para seções principais do app</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={goBackToMenu}>
        <Text style={styles.buttonText}>Voltar ao Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#10b981',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#10b981',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});