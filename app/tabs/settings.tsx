import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TabSettings() {
  function toggleNotifications() {
    Alert.alert('Sucesso', 'Notificações alternadas!');
  }

  function clearCache() {
    Alert.alert('Sucesso', 'Cache limpo!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Navigation - Configurações</Text>
      <Text style={styles.description}>
        Aba de configurações com algumas opções de exemplo.
      </Text>

      <View style={styles.settingItem}>
        <TouchableOpacity style={styles.settingButton} onPress={toggleNotifications}>
          <Text style={styles.settingText}>Alternar Notificações</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.settingItem}>
        <TouchableOpacity style={styles.settingButton} onPress={clearCache}>
          <Text style={styles.settingText}>Limpar Cache</Text>
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
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  settingItem: {
    marginBottom: 15,
  },
  settingButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  settingText: {
    fontSize: 16,
    color: '#1e293b',
  },
});