import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StackScreen1() {
  const router = useRouter();

  function goToScreen2() {
    router.push('/stack/screen2');
  }

  function goBack() {
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack Navigation - Tela 1</Text>
      <Text style={styles.description}>
        Esta é a primeira tela da navegação em pilha.
        As telas são empilhadas uma sobre a outra.
      </Text>

      <TouchableOpacity style={styles.button} onPress={goToScreen2}>
        <Text style={styles.buttonText}>Ir para Tela 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.backButton]} onPress={goBack}>
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
});