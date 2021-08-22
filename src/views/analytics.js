import React from "react";
import { TrackView } from "../controllers/firebase.config";
import * as WeekCharts from "../components/weekcharts";
export default function Analytics() {
  return (
    <>
      <TrackView></TrackView>
      <div className="top-bar">
        <div className="app-name">Analytics</div>
      </div>
      <div style={{ padding: "20px", fontSize: "1rem", fontWeight: 500 }}>
        Weekly Analysis
      </div>
      <div className="charts" style={{ marginTop: 0 }}>
        
         <WeekCharts.IFR></WeekCharts.IFR>
         <WeekCharts.CFR></WeekCharts.CFR>
         <WeekCharts.TPC></WeekCharts.TPC>
         <WeekCharts.TPR></WeekCharts.TPR>
      </div>
      <div className="update-time">Monthly Analytics (Comming Soon)</div>
    </>
  );
}
