import { StyleSheet, Text, View } from 'react-native';

export default function TabProfile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Navigation - Perfil</Text>
      <Text style={styles.description}>
        Esta é a aba de perfil. Cada aba funciona como 
        uma seção independente do aplicativo.
      </Text>

      <View style={styles.profileCard}>
        <Text style={styles.profileName}>João Silva</Text>
        <Text style={styles.profileEmail}>joao@example.com</Text>
        <Text style={styles.profileRole}>Desenvolvedor</Text>
      </View>
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
  profileCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 5,
  },
  profileRole: {
    fontSize: 16,
    color: '#10b981',
    fontWeight: '600',
  },
});