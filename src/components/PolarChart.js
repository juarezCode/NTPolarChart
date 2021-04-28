import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryPolarAxis,
  VictoryTheme,
} from 'victory-native';

// x: number of elements, y : levels
const data = [
  { x: 1, y: 0 },
  { x: 2, y: 1 },
  { x: 3, y: 2 },
  { x: 4, y: 3 },
  { x: 5, y: 4 },
  { x: 6, y: 5 },
  { x: 7, y: 6 },
  { x: 8, y: 7 },
  { x: 9, y: 8 },
  { x: 10, y: 9 },
  { x: 11, y: 10 },
  { x: 12, y: 5 },
  { x: 13, y: 3 },
  { x: 14, y: 5 },
  { x: 15, y: 4 },
];

const asignColors = segment => {
  switch (segment) {
    case 1:
      return '#F19580';
    case 2:
      return '#F6765D';
    case 3:
      return '#F8DCDB';
    case 4:
      return '#83BF8B';
    case 5:
      return '#ECCC81';
    case 6:
      return '#F5C77C';
    case 7:
      return '#F5C77C';
    case 8:
      return '#F5B85D';
    case 9:
      return '#B8DEEB';
    case 10:
      return '#A2D8E4';
    case 11:
      return 'indigo';
    case 12:
      return '#96CFE2';
    case 13:
      return '#96CFE2';
    case 14:
      return '#B2AECF';
    case 15:
      return '#C2BFDC';

    default:
      return 'green';
  }
};

const PolarChart = () => {
  return (
    <View style={styles.container}>
      <VictoryChart
        polar
        // y : levels required
        domain={{ x: [0, 15], y: [0, 10] }}
        width={350}
        theme={VictoryTheme.material}>
        <VictoryPolarAxis
          dependentAxis
          style={{
            axis: { stroke: 'none' },
            tickLabels: { fill: 'none' },
            grid: {
              stroke: 'gainsboro',
              strokeDasharray: '1',
            },
          }}
        />
        <VictoryBar
          data={data}
          style={{
            data: {
              fill: ({ datum }) => asignColors(datum.x),
              stroke: 'none',
            },
          }}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default PolarChart;
