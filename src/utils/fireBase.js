import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDlvaiq3TsUcM8jJU-AqQv-WV0b1LOjmZk',
  authDomain: 'groupe-projet.firebaseapp.com',
  databaseURL: 'https://groupe-projet.firebaseio.com/',
  projectId: 'groupe-projet',
  storageBucket: 'groupe-projet.appspot.com',
  messagingSenderId: '124606812506',
  appId: '1:124606812506:web:f7a1041bc7e679fe35e363',
  measurementId: 'G-YBEZDTHTP6'
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
