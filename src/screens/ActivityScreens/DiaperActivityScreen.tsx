import { Button, StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Picker from './components/Picker';
import { createDiaperActivity, getDiaperActivities } from '../../api/diaper';
import { PoopColor, PoopState } from '../../api/API';
import colors from '../../constants/colors';

interface DiaperFormData {
  color: PoopColor;
  state: PoopState;
}

interface DiaperActivity {
  id: string;
  color: PoopColor;
  state: PoopState;
  time: string;
}

const DiaperActivityScreen = () => {
  const [diaperActivities, setDiaperActivities] = useState<DiaperActivity[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DiaperFormData>({
    defaultValues: {
      color: PoopColor.YELLOW,
      state: PoopState.SOLID,
    },
  });

  const fetchDiaperActivities = async () => {
    try {
      const activities = await getDiaperActivities();
      setDiaperActivities(
        activities.map(activity => ({
          id: activity.id,
          color: activity.color || PoopColor.YELLOW,
          state: activity.state || PoopState.SOLID,
          time: activity.time || new Date().toISOString(),
        })),
      );
    } catch (error) {
      Alert.alert('Error', 'Could not fetch diaper activities');
    }
  };

  useEffect(() => {
    fetchDiaperActivities();
  }, []);

  const onSubmit = async (data: DiaperFormData) => {
    setIsLoading(true);
    try {
      await createDiaperActivity({
        color: data.color,
        state: data.state,
      });
      reset();
      fetchDiaperActivities();
      Alert.alert('Success', 'Diaper activity recorded successfully');
    } catch (error) {
      Alert.alert('Error', 'Could not save diaper activity');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>New Diaper Change</Text>
        
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="color"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Picker
                label="Color"
                items={Object.values(PoopColor).map(color => ({
                  label: color,
                  value: color,
                }))}
                selectedValue={value}
                onValueChange={onChange}
              />
            )}
          />
          {errors.color && (
            <Text style={styles.errorText}>Color is required</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="state"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Picker
                label="State"
                items={Object.values(PoopState).map(state => ({
                  label: state,
                  value: state,
                }))}
                selectedValue={value}
                onValueChange={onChange}
              />
            )}
          />
          {errors.state && (
            <Text style={styles.errorText}>State is required</Text>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title={isLoading ? 'Saving...' : 'Record Diaper Change'}
            onPress={handleSubmit(onSubmit)}
            disabled={isLoading}
          />
        </View>
      </View>

      <View style={styles.activitiesContainer}>
        <Text style={styles.sectionTitle}>Recent Diaper Changes</Text>
        {diaperActivities.map(activity => (
          <View key={activity.id} style={styles.activityCard}>
            <View style={styles.activityHeader}>
              <Text style={styles.activityTitle}>
                {activity.color} - {activity.state}
              </Text>
              <Text style={styles.activityTime}>
                {new Date(activity.time).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Text>
            </View>
            <Text style={styles.activityDate}>
              {new Date(activity.time).toLocaleDateString([], {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default DiaperActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  formContainer: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 16,
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: colors.primary,
  },
  inputContainer: {
    marginBottom: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 10,
  },
  activitiesContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.primary,
  },
  activityCard: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityTime: {
    fontSize: 14,
    color: '#666',
  },
  activityDate: {
    fontSize: 12,
    color: '#888',
  },
});
