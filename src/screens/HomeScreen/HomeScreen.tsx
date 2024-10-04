import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import Welcome from './Welcome';

const Home = () => {
  return (
    <View style={styles.container}>
      <Welcome />
      <Text style={styles.logActivitiesText}>Log activities</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  logActivitiesText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },

  upperContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
