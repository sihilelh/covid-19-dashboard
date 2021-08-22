"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.analytics = exports["default"] = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBHGgysMguzCPAJxeIBLGRcFv1MBYy9UY4",
  authDomain: "covid-19-dashboard-46684.firebaseapp.com",
  projectId: "covid-19-dashboard-46684",
  storageBucket: "covid-19-dashboard-46684.appspot.com",
  messagingSenderId: "604722334191",
  appId: "1:604722334191:web:f3019939faebbdf286ce1a",
  measurementId: "G-WYNQE879YE"
}; // Initialize Firebase

_app["default"].initializeApp(firebaseConfig);

var analytics = _app["default"].analytics;
exports.analytics = analytics;
var _default = _app["default"];
exports["default"] = _default;