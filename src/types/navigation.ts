import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type RootNavigatorParamList = {
  Home: undefined;
  Auth: undefined;
};

export type HomeStackNavigatorParamList = {
  HomeScreen: undefined;
  FeedingActivityScreen: undefined;
  DiaperActivityScreen: undefined;
  SleepingActivityScreen: undefined;
  AppointmentActivityScreen: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'HomeScreen'
>;

export type FeedingActivityScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'FeedingActivityScreen'
>;

export type DiaperActivityScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'DiaperActivityScreen'
>;

export type SleepingActivityScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'SleepingActivityScreen'
>;

export type AppointmentActivityScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'AppointmentActivityScreen'
>;

export type BottomTabNavigatorParamList = {
  Home: undefined;
  'News Feed': undefined;
  Profile: undefined;
  Feedback: undefined;
};

// Auth Stack Navigator
export type AuthStackNavigatorParamList = {
  'Sign in': undefined;
  'Sign up': undefined;
  'Confirm email': { email?: string };
  'Forgot password': undefined;
  'New password': undefined;
};

export type SignInNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign in'
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign up'
>;

export type ConfirmEmailNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;
export type ConfirmEmailRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;

export type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Forgot password'
>;

export type NewPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'New password'
>;
