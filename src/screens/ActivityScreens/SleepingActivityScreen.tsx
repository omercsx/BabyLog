import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Button,
} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import colors from '../../constants/colors';

const SleepingActivityScreen = () => {
  const [sleepTime, setSleepTime] = useState(new Date());
  const [wakeTime, setWakeTime] = useState(new Date());
  const [showSleepPicker, setShowSleepPicker] = useState(false);
  const [showWakePicker, setShowWakePicker] = useState(false);
  const [totalSleepTime, setTotalSleepTime] = useState('');

  useEffect(() => {
    calculateTotalSleep();
  }, [sleepTime, wakeTime]);

  const calculateTotalSleep = () => {
    const diff = wakeTime.getTime() - sleepTime.getTime();
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
    }
  };

  const onWakeTimeChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowWakePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setWakeTime(selectedDate);
    }
  };

  const handleSubmit = () => {
    console.log({
      sleepTime,
      wakeTime,
      totalSleepTime,
    });
  };

  return (
    <View style={styles.container}>
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

      <Button title="Save Sleep Record" onPress={handleSubmit} />
    </View>
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
});
