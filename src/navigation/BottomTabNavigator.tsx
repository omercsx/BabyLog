import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

import type { BottomTabNavigatorParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Profile' component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
