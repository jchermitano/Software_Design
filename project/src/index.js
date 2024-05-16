import React, { useState } from 'react';
import { View, Picker, Button, StyleSheet, Text, Pressable } from 'react-native';
import { db } from '../config.js';
import { ref, push, set } from 'firebase/database';
import moment from 'moment';

const AddData = () => {
  const [variety, setVariety] = useState('');
  const [ripeness, setRipeness] = useState('');

  const dataAddOn = () => {
    if (!variety) {
      alert('Please select a variety  before submitting.');
      return;
    }
    if (!ripeness) {
      alert('Please select a ripeness before submitting.');
      return;
    }
    const formattedDate = moment(new Date()).format('YYYY-MM-DD / HH:mm:ss');
    const newDataRef = push(ref(db));
    set(newDataRef, {
      variety: variety,
      ripeness: ripeness,
      dateAndtime: formattedDate,
    });
    setVariety('');
    setRipeness('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.format}>
      <Text style={styles.pickerTitle}> VARIETY </Text>
      <Picker
        style={styles.pickerStyles}
        selectedValue={variety}
        onValueChange={(itemValue, itemIndex) => setVariety(itemValue)}
      >
        <Picker.Item label="Choose Variety of Watermelon" value="" />
        <Picker.Item label="Sugar Baby" value="Sugar Baby" />
        <Picker.Item label="Crimson" value="Crimson" />
        {/* Add more variety options as needed */}
      </Picker>
      </View>

      <View style={styles.format}>
      <Text style={styles.pickerTitle2}> RIPENESS </Text>
      <Picker
        style={styles.pickerStyles}
        selectedValue={ripeness}
        onValueChange={(itemValue, itemIndex) => setRipeness(itemValue)}
      >
        <Picker.Item label="Choose Ripeness of Watermelon" value="" />
        <Picker.Item label="Ripe" value="Ripe" />
        <Picker.Item label="Unripe" value="Unripe" />
        <Picker.Item label="Overripe" value="Overripe" />
      </Picker>
      </View>
      <View style={styles.buttonFormat}>
      <Pressable style={styles.button} onPress={dataAddOn}>
        <Text style={styles.submit}>Submit</Text>
      </Pressable>
      </View>
    </View>
  );
};

export default AddData;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
  },
  pickerStyles:{
    width:'40%',
    height:50,
    paddingLeft:10,
    fontSize: 18,
    backgroundColor:'gray',
    color:'white',
    paddingBottom:5,
    borderRadius: 50,
  },
  submit:{
    color:'white',
    paddingLeft: 55,
    paddingTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
  pickerTitle: {
    paddingTop: 10,
    paddingRight: 32,
    color:'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle:'normal'
  },
  pickerTitle2: {
    paddingTop: 5,
    fontSize: 25,
    paddingRight: 20,
    color:'white',
    fontWeight: 'bold',
    fontStyle:'normal'
  },
  format: {
    flexDirection:'row',
    paddingTop:10,
  },
  button: {
    borderWidth:3,
    width: 190,
    height: 55,
    paddingTop: 1,
    paddingBottom: 10,
    borderColor: '#9DDE8B',
    backgroundColor: '#40A578',
    borderRadius: 50,
  },
  buttonFormat: {
    paddingTop: 10,
    paddingLeft: 210,
  }
});