import {PickerIOS} from '@react-native-picker/picker';
import {StyleSheet, Text, View} from 'react-native';

interface IPickerProps {
  label: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
  items: {label: string; value: string}[];
}

const Picker = ({label, selectedValue, onValueChange, items}: IPickerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <PickerIOS
        selectedValue={selectedValue}
        itemStyle={styles.item}
        onValueChange={value => onValueChange(value as string)}>
        {items.map(item => (
          <PickerIOS.Item
            key={item.value}
            label={item.label}
            value={item.value}
          />
        ))}
      </PickerIOS>
    </View>
  );
};

export default Picker;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },

  item: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
