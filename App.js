import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import RootStack from './navigators/RootStack';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
    
        <RootStack />
    
    </Provider>
  );
}

