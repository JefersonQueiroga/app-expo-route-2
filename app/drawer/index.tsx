import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DrawerHome() {
  const router = useRouter();

  function goBackToMenu() {
    router.push('/');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drawer Navigation - Home</Text>
      <Text style={styles.description}>
        Esta é a navegação com menu lateral (drawer). 
        Deslize da esquerda ou toque no ícone do hambúrguer 
        para abrir o menu lateral.
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Como usar:</Text>
        <Text style={styles.infoText}>• Deslize da borda esquerda</Text>
        <Text style={styles.infoText}>• Toque no ícone ☰ no cabeçalho</Text>
        <Text style={styles.infoText}>• Ideal para menus de navegação</Text>
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
    marginBottom: 20,
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
    marginBottom: 30,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#f59e0b',
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