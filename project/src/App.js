import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import RipenessGraph from './chart'
import VarietyGraph from './chart2'
import AddData from './index'
import Table from './table'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtFCWn1x7ETLP9ebbOWGhp9g1vqWC-njc",
  authDomain: "sofdes-watermelon.firebaseapp.com",
  databaseURL: "https://sofdes-watermelon-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sofdes-watermelon",
  storageBucket: "sofdes-watermelon.appspot.com",
  messagingSenderId: "453456835907",
  appId: "1:453456835907:web:1c546f6f1eedf37211abf6",
  measurementId: "G-SDE2V56Z4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
    <ImageBackground source={require('./assets/watermelon-seamless-pattern-green-stripes-vector-30741112.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Watermelon Ripeness Result</Text>
        </View>
        <View style={styles.graph}>
          <View style={styles.column}>
            <AddData/>
            <View style={styles.piegraph}>
              <RipenessGraph/>
              <VarietyGraph/>
            </View>
          </View>
            <Table style={styles.table}/>
        <View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    marginLeft: 50
  },
  graph: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 15,
    marginRight: 25,
  },
  piegraph: {
    flex: 1,
    marginTop: 150,
    marginRight: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  table: {
    flex: 1,
    paddingRight: 500,
  },
});

export default App;
