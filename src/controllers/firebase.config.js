import React, { useEffect } from "react";
import { useHistory } from "react-router";
import firebase from "firebase/app";
import "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHGgysMguzCPAJxeIBLGRcFv1MBYy9UY4",
  authDomain: "covid-19-dashboard-46684.firebaseapp.com",
  projectId: "covid-19-dashboard-46684",
  storageBucket: "covid-19-dashboard-46684.appspot.com",
  messagingSenderId: "604722334191",
  appId: "1:604722334191:web:f3019939faebbdf286ce1a",
  measurementId: "G-WYNQE879YE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const analytics = firebase.analytics;
function trackThisPage(path = window.location.pathname) {
  analytics().setCurrentScreen(path);
  analytics().logEvent("screen_view");
}
const TrackView = () => {
  const history = useHistory();
  useEffect(() => {
    trackThisPage(); // log the first page visit
    history.listen(() => {
      trackThisPage();
    });
  }, [history]);
  return <div></div>;
};
export { TrackView, trackThisPage };
