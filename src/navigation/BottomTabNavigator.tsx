import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackNavigator from './HomeStackNavigator';
import ProfileScreen from '../screens/ProfileScreen';

import type {BottomTabNavigatorParamList} from '../types/navigation';
import NewsFeedScreen from '../screens/NewsFeedScreen';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeStackNavigator} 
        options={{headerShown: false}}
      />
      <Tab.Screen name="News Feed" component={NewsFeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
