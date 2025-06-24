import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StackScreen2() {
  const router = useRouter();

  function goToScreen3() {
    router.push('/stack/screen3');
  }

  function goBack() {
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack Navigation - Tela 2</Text>
      <Text style={styles.description}>
        Segunda tela empilhada. Observe o botão "Voltar" 
        no cabeçalho que permite retornar à tela anterior.
      </Text>

      <TouchableOpacity style={styles.button} onPress={goToScreen3}>
        <Text style={styles.buttonText}>Ir para Tela 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.backButton]} onPress={goBack}>
        <Text style={styles.buttonText}>Voltar</Text>
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