import {Button, StyleSheet, Text, View} from 'react-native';
import {Controller, useForm, type FieldValues} from 'react-hook-form';
import Picker from './components/Picker';

enum PoopState {
  Solid = 'Solid',
  Liquid = 'Liquid',
}

enum PoopColor {
  Yellow = 'Yellow',
  Green = 'Green',
  Brown = 'Brown',
}

const DiaperActivityScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      color: PoopColor.Yellow,
      state: PoopState.Solid,
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="color"
        render={({field: {onChange, value}}) => (
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
      <Text style={styles.error}>{errors.color?.message}</Text>

      <Controller
        control={control}
        name="state"
        render={({field: {onChange, value}}) => (
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
      <Text style={styles.error}>{errors.state?.message}</Text>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default DiaperActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  error: {
    color: 'red',
    marginBottom: 16,
  },
});
