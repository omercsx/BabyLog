import { StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';

interface LogCardProps {
  type: 'Feeding' | 'Diaper' | 'Sleeping';
  value: string;
  date: string;
}

const LogCard = ({ type, value, date }: LogCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.date}>{new Date(date).toLocaleDateString()}</Text>
    </View>
  );
};

export default LogCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  value: {
    fontSize: 16,
    color: colors.black,
  },
  date: {
    fontSize: 14,
    color: colors.inputText,
  },
});
