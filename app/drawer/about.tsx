import { StyleSheet, Text, View } from 'react-native';

export default function DrawerAbout() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Drawer Navigation - Sobre</Text>
      <Text style={styles.description}>
        Esta tela foi acessada através do menu lateral. 
        O drawer é útil para navegação entre seções principais.
      </Text>

      <View style={styles.aboutCard}>
        <Text style={styles.aboutTitle}>Sobre este App</Text>
        <Text style={styles.aboutText}>
          Aplicativo de demonstração dos tipos de navegação 
          disponíveis no Expo Router.
        </Text>
        <Text style={styles.aboutVersion}>Versão 1.0</Text>
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
  aboutCard: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 15,
  },
  aboutText: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
    marginBottom: 15,
  },
  aboutVersion: {
    fontSize: 14,
    color: '#9ca3af',
    fontStyle: 'italic',
  },
});