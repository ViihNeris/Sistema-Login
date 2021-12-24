import Firebase from 'firebase';

var firebaseConfig = {
 apiKey: "AIzaSyD7ES_QBwhMZDUYjo_dRr7CiadBytbBv9I",
  authDomain: "dancebase-5d4b4.firebaseapp.com",
  projectId: "dancebase-5d4b4",
  storageBucket: "dancebase-5d4b4.appspot.com",
  messagingSenderId: "212296668306",
  appId: "1:212296668306:web:f0e514d6bfb6924e72c24b",
};

Firebase.initializeApp(firebaseConfig);

export default Firebase;