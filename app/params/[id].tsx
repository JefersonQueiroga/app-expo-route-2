import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UserDetails() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const id = params.id as string;
  const name = params.name as string;
  const email = params.email as string;
  const role = params.role as string;

  function goBack() {
    router.back();
  }

  function editUser() {
    Alert.alert('Editar', `Editando usuário: ${name}`);
  }

  function deleteUser() {
    Alert.alert(
      'Confirmar',
      `Deseja realmente excluir ${name}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: function() {
            Alert.alert('Sucesso', `Usuário ${name} foi removido!`);
            router.back();
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Usuário</Text>
      
      <View style={styles.detailsCard}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.value}>{id}</Text>

        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>

        <Text style={styles.label}>Cargo:</Text>
        <Text style={styles.value}>{role}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.editButton} onPress={editUser}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton} onPress={deleteUser}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={goBack}>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 30,
  },
  detailsCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  label: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '500',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#10b981',
    padding: 15,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#dc2626',
    padding: 15,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#6b7280',
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
