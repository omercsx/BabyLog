import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import colors from '../../constants/colors';

interface Appointment {
  id: string;
  date: Date;
  remainingTime: string;
}

const AppointmentActivityScreen = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onTimeChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowTimePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const calculateRemainingTime = (appointmentDate: Date): string => {
    const now = new Date();
    const diff = appointmentDate.getTime() - now.getTime();

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

  const saveAppointment = () => {
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      date: date,
      remainingTime: calculateRemainingTime(date),
    };

    setAppointments(prev => [...prev, newAppointment]);
  };

  const renderAppointment = ({ item }: { item: Appointment }) => (
    <View style={styles.appointmentCard}>
      <Text style={styles.appointmentDate}>
        {item.date.toLocaleDateString()} {item.date.toLocaleTimeString()}
      </Text>
      <Text style={styles.remainingTime}>
        {calculateRemainingTime(item.date)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Date and Time</Text>
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
              {date.toLocaleTimeString()}
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
          <DateTimePicker
            value={date}
            mode="time"
            onChange={onTimeChange}
            minimumDate={new Date()}
          />
        )}

        <Button title="Save Appointment" onPress={saveAppointment} />
      </View>

      <View style={styles.appointmentsContainer}>
        <Text style={styles.label}>Upcoming Appointments</Text>
        <FlatList
          data={appointments}
          renderItem={renderAppointment}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
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
});

export default AppointmentActivityScreen;
