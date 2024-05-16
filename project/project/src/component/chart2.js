import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { get, ref } from 'firebase/database';
import { db } from '../config';

const chartConfig = {
  backgroundColor: 'transparent',
  backgroundGradientFrom: '#eff3ff',
  backgroundGradientTo: '#efefef',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const RipenessGraph = () => {
  const [ripenessData, setRipenessData] = useState([]);

  useEffect(() => {
    const usersRef = ref(db);
    get(usersRef).then((snapshot) => {
      if (snapshot.exists()) {
        const usersArray = Object.values(snapshot.val());
        const ripenessCounts = usersArray.reduce((acc, user) => {
          acc[user.ripeness] = (acc[user.ripeness] || 0) + 1;
          return acc;
        }, {});

        const formattedData = Object.keys(ripenessCounts).map((ripeness, index) => ({
          name: ripeness,
          population: ripenessCounts[ripeness],
          color: getColor(index),
          legendFontColor: 'white',
          legendFontSize: 15,
        }));

        setRipenessData(formattedData);
      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  const getColor = (index) => {
    const colors = ['#F00', '#0F0', '#00F', '#FF0', '#F0F', '#0FF', '#800', '#080', '#008'];
    return colors[index % colors.length];
  };

  return (
    <View style={styles.container}>
      <PieChart
        data={ripenessData}
        width={500}
        height={420}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'90'}
        absolute
      />
    </View>
  );
};

export default RipenessGraph;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
