import React, { useState, useEffect } from "react";
import * as Reports from "../controllers/reports";
import CountUp from "react-countup";
import * as WeekCharts from "../components/weekcharts";
import { TrackView } from "../controllers/firebase.config";
export default function Home() {
  const [allData, setallData] = useState({
    update_date_time: "",
  });
  const [TodayCases, setTodayCases] = useState(0);
  const [TodayDeaths, setTodayDeaths] = useState(0);
  const [TodayRecovered, setTodayRecovered] = useState(0);
  useEffect(() => {
    UpdateData();
  }, []);
  async function UpdateData() {
    let historyData = await Reports.getHistory();
    let todayData = await Reports.getTodayData();
    todayData = todayData.data;
    historyData = historyData.data;
    setallData(todayData);
    setTodayCases(todayData.local_new_cases);
    setTodayRecovered(historyData[0].recoveries_count);
    setTodayDeaths(todayData.local_new_deaths);
  }
  return (
    <>
      <TrackView></TrackView>
      <div className="top-bar">
        <div className="app-name">Home</div>
      </div>
      <div className="front-data">
        <div className="data-field blue">
          <div className="text">New cases reported today</div>
          <div className="number">
            <CountUp end={TodayCases} duration={2}></CountUp>
          </div>
        </div>
        <div className="data-field red">
          <div className="text">Deaths reported today</div>
          <div className="number">
            <CountUp end={TodayDeaths} duration={2}></CountUp>
          </div>
        </div>
        <div className="data-field green">
          <div className="text">Patients recovered today</div>
          <div className="number">
            <CountUp end={TodayRecovered} duration={2}></CountUp>
          </div>
        </div>
      </div>
      <div className="charts">
        <WeekCharts.ALLDATA></WeekCharts.ALLDATA>
        <WeekCharts.ALLDATADONUT></WeekCharts.ALLDATADONUT>
      </div>
      <div className="charts-bottom">
        <WeekCharts.CASES></WeekCharts.CASES>
        <WeekCharts.DEATHS></WeekCharts.DEATHS>
        <WeekCharts.RECOVERED></WeekCharts.RECOVERED>
      </div>
      <div className="update-time">Updated At: {allData.update_date_time}</div>
    </>
  );
}
