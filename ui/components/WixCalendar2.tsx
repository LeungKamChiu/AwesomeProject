import React, {useState} from 'react'
import moment from 'moment' // 2.20.1
import {View} from 'react-native' // 0.0.1
import {Calendar} from 'react-native-calendars' // 1.16.1


const WixCalendar2 = (props: any) => {
  const _format = 'YYYY-MM-DD'
  const [_markedDates, setMarkedDates] = useState({});
  const [startDate, setStartDate] = useState();
  const [isStartDate, setIsStartDate] = useState(true);
  console.log('sdfsdfsdfds ' + JSON.stringify(props));


  const onDaySelect = (day) => {

    if (isStartDate) {
      setStartDate(day);
      setIsStartDate(false);
    } else {
      setIsStartDate(true);
    }

    let aaaa = {};
    let i = 0;
    if (startDate && day && startDate?.timestamp < day?.timestamp && !isStartDate) {

      const from = new Date(startDate.year, startDate.month - 1, startDate.day);
      const to = new Date(day.year, day.month - 1, day.day);


      for (let day = new Date(from); day <= to; day.setDate(day.getDate() + 1)) {
      i++;
        const formatDate = moment(day).format(_format);
        const formatFromDate = moment(from).format(_format);
        const formatToDate = moment(to).format(_format);


        if (formatDate == formatFromDate) {
          aaaa[formatDate] = {startingDay: true, color: '#0373F3'};
        } else if (formatDate == formatToDate) {
          aaaa[formatDate] = {selected: true, endingDay: true, color: '#0373F3', textColor: 'white'};
        } else {
          aaaa[formatDate] = {selected: true, color: 'lightblue', textColor: 'black'};
        }
      }
    }
    props.setTotalDate(i);

    setMarkedDates(aaaa);
  }

  return (
    <View style={{
      flex: 1
    }}>
      <Calendar
        current={Date()}
        onDayPress={onDaySelect}
        markedDates={_markedDates}
        markingType={'period'}
      />
    </View>
  );
}

export default WixCalendar2;
