import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Controller, useForm, type FieldValues} from 'react-hook-form';

const FeedingActivityScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      amount: 0,
      type: '',
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Food Type</Text>
      <Controller
        control={control}
        name="type"
        rules={{required: true}}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.type && (
        <Text style={styles.errorText}>Food type is required</Text>
      )}
      <Text style={styles.label}>Amount</Text>
      <Controller
        control={control}
        name="amount"
        rules={{required: true}}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value.toString()}
          />
        )}
      />
      {errors.amount && (
        <Text style={styles.errorText}>Amount is required</Text>
      )}
      <Button onPress={handleSubmit(onSubmit)} title="Submit" />
      <View style={styles.lastFeedingActivitiesContainer}>
        <Text style={styles.label}>Last Feeding Activities</Text>
        <FlatList
          data={[
            {type: 'Milk', amount: 100, date: new Date('2024-02-14')},
            {type: 'Milk', amount: 100, date: new Date('2024-02-13')},
            {type: 'Milk', amount: 100, date: new Date('2024-02-12')},
          ]}
          renderItem={({item}) => (
            <Text>
              {item.type} - {item.amount} ml - {item.date.toLocaleDateString()}
            </Text>
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
});
