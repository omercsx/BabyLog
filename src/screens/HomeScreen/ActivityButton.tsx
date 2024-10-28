import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  type ImageSourcePropType,
} from 'react-native';
import placeholderImage from '../../assets/sign_in_baby.png';
import { useNavigation } from '@react-navigation/native';
import type { HomeScreenNavigationProp } from '../../types/navigation';

interface ActivityButtonProps {
  image?: ImageSourcePropType;
  text?: string;
}

const ActivityButton = ({
  image = placeholderImage,
  text = 'Activity',
}: ActivityButtonProps) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePress = () => {
    switch (text) {
      case 'Feeding':
        navigation.navigate('FeedingActivityScreen');
        break;
      case 'Diaper':
        navigation.navigate('DiaperActivityScreen');
        break;
      case 'Sleeping':
        navigation.navigate('SleepingActivityScreen');
        break;
      case 'Appointment':
        navigation.navigate('AppointmentActivityScreen');
        break;
      default:
        console.warn(`No screen defined for activity: ${text}`);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ActivityButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 150,
  },

  text: {
    fontSize: 20,
  },
});
