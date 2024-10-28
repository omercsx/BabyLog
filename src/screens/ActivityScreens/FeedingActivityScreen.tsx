import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { createFeedingActivity, getFeedingActivities } from '../../api/feeding';

interface FeedingFormData {
  type: string;
  amount: number;
}

interface Feeding {
  id: string;
  type: string;
  amount: number;
  createdAt: string;
}

const FeedingActivityScreen = () => {
  const [feedings, setFeedings] = useState<Feeding[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedingFormData>({
    defaultValues: {
      amount: 0,
      type: '',
    },
  });

  const fetchFeedings = async () => {
    try {
      const feedingData = await getFeedingActivities();
      setFeedings(
        feedingData.map(feeding => ({
          id: feeding.id,
          type: feeding.food_type || '',
          amount: feeding.amount || 0,
          createdAt: feeding.createdAt,
        })),
      );
    } catch (error) {
      Alert.alert('Error', 'Could not fetch feeding activities');
    }
  };

  useEffect(() => {
    fetchFeedings();
  }, []);

  const onSubmit = async (data: FeedingFormData) => {
    setIsLoading(true);
    try {
      await createFeedingActivity({
        food_type: data.type,
        amount: Number(data.amount),
      });
      reset();
      fetchFeedings(); // Refresh the list
      Alert.alert('Success', 'Feeding activity recorded successfully');
    } catch (error) {
      Alert.alert('Error', 'Could not save feeding activity');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Food Type</Text>
      <Controller
        control={control}
        name="type"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Enter food type"
          />
        )}
      />
      {errors.type && (
        <Text style={styles.errorText}>Food type is required</Text>
      )}

      <Text style={styles.label}>Amount (ml)</Text>
      <Controller
        control={control}
        name="amount"
        rules={{ required: true, min: 0 }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={val => onChange(Number(val))}
            value={value.toString()}
            keyboardType="numeric"
            placeholder="Enter amount"
          />
        )}
      />
      {errors.amount && (
        <Text style={styles.errorText}>Amount is required</Text>
      )}

      <Button
        onPress={handleSubmit(onSubmit)}
        title={isLoading ? 'Saving...' : 'Submit'}
        disabled={isLoading}
      />

      <View style={styles.lastFeedingActivitiesContainer}>
        <Text style={styles.label}>Last Feeding Activities</Text>
        <FlatList
          data={feedings}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.feedingItem}>
              <Text style={styles.feedingText}>
                {item.type} - {item.amount} ml
              </Text>
              <Text style={styles.feedingDate}>
                {new Date(item.createdAt).toLocaleDateString()}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default FeedingActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  lastFeedingActivitiesContainer: {
    marginTop: 20,
  },
  feedingItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  feedingText: {
    fontSize: 16,
  },
  feedingDate: {
    fontSize: 12,
    color: '#666',
  },
});
