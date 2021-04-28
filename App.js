import React from 'react';
import { Text, View } from 'react-native';
import PolarChart from './src/components/PolarChart';

const App = () => {
  return (
    <View>
      <PolarChart />
      <Text>Polar chart</Text>
    </View>
  );
};

export default App;
