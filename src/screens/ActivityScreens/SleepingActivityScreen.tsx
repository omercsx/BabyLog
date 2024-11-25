import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import colors from '../../constants/colors';
import { createSleepActivity, getSleepActivities } from '../../api/sleeping';

interface SleepActivity {
  id: string;
  sleep: string;
  wake: string;
}

const SleepingActivityScreen = () => {
  const [sleepTime, setSleepTime] = useState(new Date());
  const [wakeTime, setWakeTime] = useState(new Date());
  const [showSleepPicker, setShowSleepPicker] = useState(false);
  const [showWakePicker, setShowWakePicker] = useState(false);
  const [totalSleepTime, setTotalSleepTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sleepActivities, setSleepActivities] = useState<SleepActivity[]>([]);

  useEffect(() => {
    calculateTotalSleep();
  }, [sleepTime, wakeTime]);

  useEffect(() => {
    fetchSleepActivities();
  }, []);

  const fetchSleepActivities = async () => {
    try {
      const activities = await getSleepActivities();
      setSleepActivities(activities as SleepActivity[]);
    } catch (error) {
      Alert.alert('Error', 'Could not fetch sleep activities');
    }
  };

  const calculateTotalSleep = () => {
    let diff = wakeTime.getTime() - sleepTime.getTime();
    // If wake time is earlier than sleep time, assume it's the next day
    if (diff < 0) {
      const nextDayWakeTime = new Date(wakeTime);
      nextDayWakeTime.setDate(nextDayWakeTime.getDate() + 1);
      diff = nextDayWakeTime.getTime() - sleepTime.getTime();
    }
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    setTotalSleepTime(`${hours} hours ${minutes} minutes`);
  };

  const onSleepTimeChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    setShowSleepPicker(Platform.OS === 'ios');
    if (selectedDate) {
      setSleepTime(selectedDate);
      // If sleep time is after wake time, adjust wake time to next day
      if (selectedDate.getTime() > wakeTime.getTime()) {
        const newWakeTime = new Date(selectedDate);
        newWakeTime.setDate(newWakeTime.getDate() + 1);
        setWakeTime(newWakeTime);
      }
    }
  };

  const onWakeTimeChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    setShowWakePicker(Platform.OS === 'ios');
    if (selectedDate) {
      // If wake time is before sleep time, assume it's the next day
      if (selectedDate.getTime() < sleepTime.getTime()) {
        const nextDayWakeTime = new Date(selectedDate);
        nextDayWakeTime.setDate(nextDayWakeTime.getDate() + 1);
        setWakeTime(nextDayWakeTime);
      } else {
        setWakeTime(selectedDate);
      }
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await createSleepActivity({
        sleep: sleepTime.toISOString(),
        wake: wakeTime.toISOString(),
      });
      Alert.alert('Success', 'Sleep activity recorded successfully');
      fetchSleepActivities();
    } catch (error) {
      Alert.alert('Error', 'Could not save sleep activity');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDuration = (sleep: string, wake: string) => {
    const diff = new Date(wake).getTime() - new Date(sleep).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sleep Time</Text>
        <TouchableOpacity
          style={styles.timeButton}
          onPress={() => setShowSleepPicker(true)}>
          <Text style={styles.timeButtonText}>
            {sleepTime.toLocaleTimeString()}
          </Text>
        </TouchableOpacity>

        {showSleepPicker && (
          <DateTimePicker
            value={sleepTime}
            mode="time"
            is24Hour={true}
            onChange={onSleepTimeChange}
          />
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Wake Time</Text>
        <TouchableOpacity
          style={styles.timeButton}
          onPress={() => setShowWakePicker(true)}>
          <Text style={styles.timeButtonText}>
            {wakeTime.toLocaleTimeString()}
          </Text>
        </TouchableOpacity>

        {showWakePicker && (
          <DateTimePicker
            value={wakeTime}
            mode="time"
            is24Hour={true}
            onChange={onWakeTimeChange}
          />
        )}
      </View>

      <View style={styles.totalSleepCard}>
        <Text style={styles.totalSleepTitle}>Total Sleep Time</Text>
        <Text style={styles.totalSleepTime}>{totalSleepTime}</Text>
      </View>

      <Button
        title={isLoading ? 'Saving...' : 'Save Sleep Record'}
        onPress={handleSubmit}
        disabled={isLoading}
      />

      <View style={styles.sleepHistoryContainer}>
        <Text style={styles.historyTitle}>Sleep History</Text>
        {sleepActivities.map(activity => (
          <View key={activity.id} style={styles.historyCard}>
            <View style={styles.historyHeader}>
              <Text style={styles.historyDate}>
                {new Date(activity.sleep).toLocaleDateString()}
              </Text>
              <Text style={styles.historyDuration}>
                {formatDuration(activity.sleep, activity.wake)}
              </Text>
            </View>
            <View style={styles.historyTimes}>
              <Text style={styles.timeText}>
                Sleep: {new Date(activity.sleep).toLocaleTimeString()}
              </Text>
              <Text style={styles.timeText}>
                Wake: {new Date(activity.wake).toLocaleTimeString()}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SleepingActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.black,
  },
  timeButton: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  timeButtonText: {
    fontSize: 24,
    color: colors.black,
    fontWeight: '500',
  },
  totalSleepCard: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  totalSleepTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 10,
  },
  totalSleepTime: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.black,
  },
  sleepHistoryContainer: {
    marginTop: 20,
    padding: 15,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: colors.primary,
  },
  historyCard: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  historyDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  historyDuration: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
  },
  historyTimes: {
    gap: 4,
  },
  timeText: {
    fontSize: 14,
    color: colors.inputText,
  },
});
