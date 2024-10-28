import { StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';

const LogCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feeding</Text>
      <Text style={styles.value}>Bla bla bla</Text>
      <Text style={styles.date}>2024-01-01</Text>
    </View>
  );
};

export default LogCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
  },
});
