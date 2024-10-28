import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';
import Welcome from './Welcome';
import ActivityButton from './ActivityButton';
import diaper from '../../assets/diaper.png';
import feeding from '../../assets/baby_feed.jpg';
import sleeping from '../../assets/sleeping.png';
import appointment from '../../assets/calendar.jpg';
import LogCard from './LogCard';
import { getDiaperActivities } from '../../api/diaper';
import { getFeedingActivities } from '../../api/feeding';
import { getSleepActivities } from '../../api/sleeping';

const Home = () => {
  const [latestFeeding, setLatestFeeding] = useState<any>(null);
  const [latestDiaper, setLatestDiaper] = useState<any>(null);
  const [latestSleep, setLatestSleep] = useState<any>(null);

  useEffect(() => {
    fetchLatestActivities();
  }, []);

  const fetchLatestActivities = async () => {
    try {
      // Fetch latest feeding
      const feedings = await getFeedingActivities();
      if (feedings.length > 0) {
        setLatestFeeding(feedings[feedings.length - 1]);
      }

      // Fetch latest diaper
      const diapers = await getDiaperActivities();
      if (diapers.length > 0) {
        setLatestDiaper(diapers[diapers.length - 1]);
      }

      // Fetch latest sleep
      const sleeps = await getSleepActivities();
      if (sleeps.length > 0) {
        setLatestSleep(sleeps[sleeps.length - 1]);
      }
    } catch (error) {
      console.error('Error fetching latest activities:', error);
    }
  };

  const formatSleepDuration = (sleep: string, wake: string) => {
    const diff = new Date(wake).getTime() - new Date(sleep).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <View style={styles.container}>
      <Welcome />
      <View>
        <Text style={styles.logActivitiesText}>Log activities</Text>
        <View style={styles.activityContainer}>
          <ActivityButton text="Feeding" image={feeding} />
          <ActivityButton text="Diaper" image={diaper} />
        </View>
        <View style={styles.activityContainer}>
          <ActivityButton text="Sleeping" image={sleeping} />
          <ActivityButton text="Appointment" image={appointment} />
        </View>
        <Text style={styles.logsText}>Latest Logs</Text>
        <ScrollView style={styles.logsContainer}>
          {latestFeeding && (
            <LogCard
              type="Feeding"
              value={`${latestFeeding.food_type} - ${latestFeeding.amount}ml`}
              date={latestFeeding.createdAt}
            />
          )}
          {latestDiaper && (
            <LogCard
              type="Diaper"
              value={`${latestDiaper.color} - ${latestDiaper.state}`}
              date={latestDiaper.time}
            />
          )}
          {latestSleep && (
            <LogCard
              type="Sleeping"
              value={formatSleepDuration(latestSleep.sleep, latestSleep.wake)}
              date={latestSleep.sleep}
            />
          )}
        </ScrollView>
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
  logsContainer: {
    marginHorizontal: 20,
    maxHeight: 200,
  },
  logActivitiesText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  logsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  activityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
