// Import the Firebase Firestore library
const admin = require('firebase-admin');

// Initialize the Firebase app
admin.initializeApp({
  // Your Firebase project credentials
});

// Get a reference to the Firestore database
const db = admin.firestore();

// Define your dataset as an array of objects
const dataset = [
  { Count: '1', Variety: 'Sugar Baby', Ripeness: 'Unripe', Date: 'Mar 9, 2024', Time: '03:28' },
  { Count: '2', Variety: 'Sugar Baby', Ripeness: 'Unripe', Date: 'Mar 9, 2024', Time: '03:31' },
  { Count: '3', Variety: 'Crimson', Ripeness: 'Ripe', Date: 'Mar 9, 2024', Time: '03:37' },
  { Count: '4', Variety: 'Crimson', Ripeness: 'Overripe', Date: 'Mar 9, 2024', Time: '03:40' },
  { Count: '5', Variety: 'Sugar Baby', Ripeness: 'Ripe', Date: 'Mar 9, 2024', Time: '03:45' },
  { Count: '6', Variety: 'Crimson', Ripeness: 'Unripe', Date: 'Mar 9, 2024', Time: '04:13' },
  { Count: '7', Variety: 'Crimson', Ripeness: 'Overripe', Date: 'Mar 9, 2024', Time: '04:16' },
  { Count: '8', Variety: 'Sugar Baby', Ripeness: 'Ripe', Date: 'Mar 9, 2024', Time: '04:17' },
];

// Write the dataset to Firestore
dataset.forEach(data => {
  db.collection('fruits').add(data)
    .then(docRef => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(error => {
      console.error('Error writing document: ', error);
    });
});