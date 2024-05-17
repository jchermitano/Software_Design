import React from 'react';
import { View, Text } from 'react-native';

const ContributionCalendar = ({ contributions }) => {
  // Assuming contributions is an array of dates
  const daysWithContributions = contributions.map(contribution => {
    const date = new Date(contribution);
    return date.getDate();
  });

  return (
    <View>
      {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
        <View key={day}>
          <Text style={{ color: daysWithContributions.includes(day) ? 'green' : 'black' }}>
            {day}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ContributionCalendar;