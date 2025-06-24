import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StackScreen3() {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  function goToRoot() {
    router.push('/');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack Navigation - Tela 3</Text>
      <Text style={styles.description}>
        Terceira e última tela da pilha. Você pode voltar 
        uma tela por vez ou ir direto ao menu inicial.
      </Text>

      <TouchableOpacity style={[styles.button, styles.backButton]} onPress={goBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.homeButton]} onPress={goToRoot}>
        <Text style={styles.buttonText}>Ir para Menu Inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
    justifyContent: 'center',
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
  button: {
    backgroundColor: '#dc2626',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#6b7280',
  },
  homeButton: {
    backgroundColor: '#059669',
  },
});