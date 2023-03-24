import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

export default class CustomeDateRangePicker extends React.Component {
  state = {
    markedDates: {},
    isStartDatePicked: false,
    isEndDatePicked: false,
    startDate: '',
  };

  onDayPress = day => {
    console.log('date list ', this.state.markedDates, '\n\n');
    let markedDates = this.state.markedDates;
    if (markedDates[day.dateString]) {
      const newDates = markedDates;
      delete newDates[day.dateString];
      this.setState({
        markedDates: markedDates,
        isStartDatePicked: false,
        isEndDatePicked: true,
        startDate: day.dateString,
      });
    } else {
      markedDates[day.dateString] = {
        startingDay: false,
        color: '#00B0BF',
        textColor: '#FFFFFF',
      };
      this.setState({
        markedDates: markedDates,
        isStartDatePicked: false,
        isEndDatePicked: true,
        startDate: day.dateString,
      });
    }
  };

  render() {
    return (

      <Calendar
        minDate={Date()}
        current={'2021-08-10'}
        monthFormat={'MMMM yyyy'}
        markedDates={this.state.markedDates}
        markingType="period"
        hideExtraDays={true}
        hideDayNames={false}
        enableSwipeMonths={true}
        onDayPress={this.onDayPress}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
