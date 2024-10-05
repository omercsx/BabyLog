import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import Welcome from './Welcome';
import ActivityButton from './ActivityButton';
import diaper from '../../assets/diaper.png';
import feeding from '../../assets/baby_feed.jpg';
import sleeping from '../../assets/sleeping.png';
import appointment from '../../assets/calendar.jpg';

const Home = () => {
  return (
    <View style={styles.container}>
      <Welcome />
      <Text style={styles.logActivitiesText}>Log activities</Text>
      <View style={styles.activityContainer}>
        <ActivityButton text="Feeding" image={feeding} />
        <ActivityButton text="Diaper" image={diaper} />
      </View>
      <View style={styles.activityContainer}>
        <ActivityButton text="Sleeping" image={sleeping} />
        <ActivityButton text="Appointment" image={appointment} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    gap: 20,
  },

  logActivitiesText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },

  activityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
