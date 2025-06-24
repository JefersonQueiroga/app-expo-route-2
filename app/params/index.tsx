import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { User } from '../../types/User';

export default function ParamsList() {
  const router = useRouter();

  const users: User[] = [
    { id: 1, name: 'Ana Silva', email: 'ana@example.com', role: 'Designer' },
    { id: 2, name: 'Carlos Santos', email: 'carlos@example.com', role: 'Desenvolvedor' },
    { id: 3, name: 'Maria Oliveira', email: 'maria@example.com', role: 'Gerente de Projetos' },
    { id: 4, name: 'João Costa', email: 'joao@example.com', role: 'Analista' },
  ];

  function viewUserDetails(user: User) {
    router.push({
      pathname: '/params/[id]',
      params: { 
        id: user.id.toString(),
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  }

  function goBackToMenu() {
    router.push('/');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Navegação com Parâmetros</Text>
        <Text style={styles.description}>
          Toque em um usuário para ver como os parâmetros 
          são passados entre as telas.
        </Text>

        {users.map(function(user: User) {
          return (
            <TouchableOpacity 
              key={user.id} 
              style={styles.userCard} 
              onPress={function() { viewUserDetails(user); }}
            >
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userRole}>{user.role}</Text>
              <Text style={styles.userEmail}>{user.email}</Text>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity style={styles.backButton} onPress={goBackToMenu}>
          <Text style={styles.backButtonText}>Voltar ao Menu</Text>
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
  userCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#8b5cf6',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  userRole: {
    fontSize: 14,
    color: '#8b5cf6',
    fontWeight: '600',
    marginBottom: 3,
  },
  userEmail: {
    fontSize: 14,
    color: '#64748b',
  },
  backButton: {
    backgroundColor: '#6b7280',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});