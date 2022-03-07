import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyD_NJ-N5BQvBwyli3HSvMQBky6pD3-KEsc",
	authDomain: "nushgram.firebaseapp.com",
	databaseURL: "https://nushgram-default-rtdb.firebaseio.com/",
	projectId: "nushgram",
	storageBucket: "nushgram.appspot.com",
	messagingSenderId: "1035689910539",
	appId: "1:1035689910539:web:156744d08661de5cfc420e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
