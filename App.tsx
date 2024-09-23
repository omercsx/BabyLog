import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './src/navigation';

import {Amplify} from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
import AuthContextProvider from './src/context/AuthContext';

Amplify.configure(amplifyconfig);

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}
