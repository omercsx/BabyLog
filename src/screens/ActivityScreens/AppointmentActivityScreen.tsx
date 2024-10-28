import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Button,
  Alert,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import colors from '../../constants/colors';
import {
  createAppointmentActivity,
  getAppointmentActivities,
} from '../../api/appointment';

interface Appointment {
  id: string;
  title: string;
  date: string;
  note?: string;
}

const AppointmentActivityScreen = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pastAppointments, setPastAppointments] = useState<Appointment[]>([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState<
    Appointment[]
  >([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const activities = await getAppointmentActivities();
      const now = new Date();

      const sorted = (activities as unknown as Appointment[]).sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );

      setPastAppointments(sorted.filter(app => new Date(app.date) < now));
      setUpcomingAppointments(sorted.filter(app => new Date(app.date) >= now));
    } catch (error) {
      Alert.alert('Error', 'Could not fetch appointments');
    }
  };

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onTimeChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowTimePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const saveAppointment = async () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter an appointment title');
      return;
    }

    setIsLoading(true);
    try {
      await createAppointmentActivity({
        title: title.trim() || '', // Add fallback empty string
        date: date.toISOString(),
      });
      setTitle('');
      fetchAppointments();
      Alert.alert('Success', 'Appointment saved successfully');
    } catch (error) {
      Alert.alert('Error', 'Could not save appointment');
    } finally {
      setIsLoading(false);
    }
  };

  const calculateRemainingTime = (appointmentDate: string): string => {
    const now = new Date();
    const appDate = new Date(appointmentDate);
    const diff = appDate.getTime() - now.getTime();

    if (diff < 0) {
      return 'Past appointment';
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (days > 0) {
      return `${days} days ${hours} hours remaining`;
    }
    return `${hours} hours remaining`;
  };

  const renderAppointment = ({ item }: { item: Appointment }) => (
    <View
      style={
        new Date(item.date) < new Date()
          ? styles.pastAppointmentCard
          : styles.appointmentCard
      }>
      <Text style={styles.appointmentTitle}>{item.title}</Text>
      <Text style={styles.appointmentDate}>
        {new Date(item.date).toLocaleDateString()}{' '}
        {new Date(item.date).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </Text>
      <Text style={styles.remainingTime}>
        {calculateRemainingTime(item.date)}
      </Text>
    </View>
  );

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>New Appointment</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="Enter appointment title"
            />
          </View>
        </View>

        <View style={styles.dateTimeContainer}>
          <TouchableOpacity
            style={styles.dateTimeButton}
            onPress={() => setShowDatePicker(true)}>
            <Text style={styles.dateTimeButtonText}>
              {date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dateTimeButton}
            onPress={() => setShowTimePicker(true)}>
            <Text style={styles.dateTimeButtonText}>
              {date.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            onChange={onDateChange}
            minimumDate={new Date()}
          />
        )}
        {showTimePicker && (
          <DateTimePicker value={date} mode="time" onChange={onTimeChange} />
        )}

        <Button
          title={isLoading ? 'Saving...' : 'Save Appointment'}
          onPress={saveAppointment}
          disabled={isLoading}
        />
      </View>

      <View style={styles.appointmentsContainer}>
        <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
        <FlatList
          data={upcomingAppointments}
          renderItem={renderAppointment}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          nestedScrollEnabled
        />

        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
          Past Appointments
        </Text>
        <FlatList
          data={pastAppointments}
          renderItem={renderAppointment}
          keyExtractor={item => item.id}
          scrollEnabled={false}
          nestedScrollEnabled
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  formContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateTimeButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    flex: 0.48,
  },
  dateTimeButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.black,
  },
  appointmentsContainer: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  appointmentCard: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  appointmentDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  remainingTime: {
    fontSize: 14,
    color: 'gray',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: colors.black,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  appointmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.primary,
  },
  pastAppointmentCard: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    opacity: 0.7,
    borderColor: colors.inputText,
  },
});

export default AppointmentActivityScreen;
