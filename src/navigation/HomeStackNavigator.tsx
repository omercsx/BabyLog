import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackNavigatorParamList } from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';

import logo from '../assets/babylogpng.png';
import FeedingActivityScreen from '../screens/ActivityScreens/FeedingActivityScreen';
import DiaperActivityScreen from '../screens/ActivityScreens/DiaperActivityScreen';
import SleepingActivityScreen from '../screens/ActivityScreens/SleepingActivityScreen';
import AppointmentActivityScreen from '../screens/ActivityScreens/AppointmentActivityScreen';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: HeaderTitle }}
      />
      <Stack.Screen
        name="FeedingActivityScreen"
        component={FeedingActivityScreen}
        options={{ headerTitle: 'Feeding' }}
      />
      <Stack.Screen
        name="DiaperActivityScreen"
        component={DiaperActivityScreen}
        options={{ headerTitle: 'Diaper' }}
      />
      <Stack.Screen
        name="SleepingActivityScreen"
        component={SleepingActivityScreen}
        options={{ headerTitle: 'Sleeping' }}
      />
      <Stack.Screen
        name="AppointmentActivityScreen"
        component={AppointmentActivityScreen}
        options={{ headerTitle: 'Appointment' }}
      />
    </Stack.Navigator>
  );
};

const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{ width: 100, height: 50 }}
    />
  );
};

export default HomeStackNavigator;
