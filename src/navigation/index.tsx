import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootNavigatorParamList } from '../types/navigation';
import AuthStackNavigator from './AuthStackNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { useAuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
  const { user } = useAuthContext();

  if (user === undefined) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {user === null ? (
          <Stack.Screen
            name="Auth"
            component={AuthStackNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator screenOptions={{headerShown: true}}>
  //       <Stack.Screen
  //         name="Home"
  //         component={BottomTabNavigator}
  //         options={{headerShown: false}}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Navigation;
