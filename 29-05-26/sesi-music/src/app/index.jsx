import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Rotas from '../routes/index';

export default function Index() {
  return (
    <SafeAreaProvider>
        <Rotas />
    </SafeAreaProvider>
  );
}