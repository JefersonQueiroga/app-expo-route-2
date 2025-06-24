import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DrawerContact() {
  function sendEmail() {
    Alert.alert('Email', 'Abrindo cliente de email...');
  }

  function callPhone() {
    Alert.alert('Telefone', 'Ligando...');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drawer Navigation - Contato</Text>
      <Text style={styles.description}>
        Informações de contato acessadas pelo menu lateral.
      </Text>

      <View style={styles.contactCard}>
        <Text style={styles.contactTitle}>Entre em Contato</Text>
        
        <TouchableOpacity style={styles.contactButton} onPress={sendEmail}>
          <Text style={styles.contactText}>📧 contato@example.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactButton} onPress={callPhone}>
          <Text style={styles.contactText}>📱 (11) 99999-9999</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  contactCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#f59e0b',
    textAlign: 'center',
  },
});