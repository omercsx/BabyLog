import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackNavigatorParamList } from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';

import logo from '../../assets/babylogpng.png';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{ headerTitle: HeaderTitle }}
			/>
		</Stack.Navigator>
	);
};

const HeaderTitle = () => {
	return (
		<Image
			source={logo}
			resizeMode='contain'
			style={{ width: 100, height: 50 }}
		/>
	);
};

export default HomeStackNavigator;
