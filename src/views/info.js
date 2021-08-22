import React from "react";
import IFRPng from "../assets/ifr.png";
import CFRPng from "../assets/cfr.png";
import { TrackView } from "../controllers/firebase.config";
import { Route } from "react-router-dom";
export default function Info() {
  let container = { padding: "20px" };
  let flexContainer = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  };
  let imageStyle = {
    maxWidth: "100%",
  };
  let IFR = () => {
    return (
      <div style={container}>
        <h3>What is IFR (Infection Fatality Ratio)</h3>
        <div style={flexContainer}>
          <img src={IFRPng} style={imageStyle} alt="IFR Formula"></img>
        </div>
      </div>
    );
  };
  let CFR = () => {
    return (
      <div style={container}>
        <h3>What is CFR (Case Fatality Rate)</h3>
        <div style={flexContainer}>
          <img src={CFRPng} style={imageStyle} alt="IFR Formula"></img>
        </div>
        <p>
          A case fatality rate tells you how severe a disease is. It also
          measures how effective treatments are, on average.
        </p>
      </div>
    );
  };
  let TPR = () => {
    return (
      <div style={container}>
        <h3>What is Test Positivity Rate (TPR)</h3>
        <p>
          <b>How it's calculated:</b> Take the number of positive tests for a
          length of time (like the number of positive tests from one day or one
          week). Divide it by the total number of tests for the same time
          period.
          <br /> <br />
          <b>What it means:</b> The test positivity rate measures both the
          outbreak's severity and the limitations of testing.
          <br /> <br />
          <b>Should it be high or low?</b> A lower positivity rate is better. A
          decreasing positivity rate means either fewer people are infected or
          you're testing more of the population.
        </p>
      </div>
    );
  };
  let TPC = () => {
    return (
      <div style={container}>
        <h3>What is Tests Per Capita (TPC)</h3>
        <p>
          <b>How it's calculated:</b> Take the total number of tests a place has
          given. Then divide it by the number of people who live in that place.
          <br /> <br />
          <b>What it means:</b> How many people – proportionally – have access
          to testing.
          <br /> <br />
          <b>Should it be high or low?</b> Increasing testing helps track the
          outbreak, so it's good to increase tests per capita. Higher tests per
          capita keep the test positivity rate low.
        </p>
      </div>
    );
  };
  return (
    <>
      <TrackView></TrackView>
      <div className="top-bar">
        <div className="app-name">Information</div>
      </div>
      <div style={container}>
        This is an analytical panel for Covid 19 disease data. The Government (
        <a
          href="https://hpb.health.gov.lk/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#99e" }}
        >
          Health Promotion Bureau
        </a>
        ) provides all data, and the dashboard is designed, developed, and
        analyzed by{" "}
        <a
          href="http://sihilel.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#99e" }}
        >
          Sihilel Himasara
        </a>
        .
      </div>
      <Route path="/info" exact>
        <IFR></IFR>
        <CFR></CFR>
        <TPR></TPR>
        <TPC></TPC>
        <div style={container}>
          for more info{" "}
          <a
            href="https://www.who.int/news-room/commentaries/detail/estimating-mortality-from-covid-19"
            target="_blank"
            rel="noreferrer"
          >
            https://www.who.int/news-room/commentaries/detail/estimating-mortality-from-covid-19
          </a>
        </div>
      </Route>
      <Route path="/info/ifr" exact component={IFR}></Route>
      <Route path="/info/cfr" exact component={CFR}></Route>
      <Route path="/info/tpr" exact component={TPR}></Route>
      <Route path="/info/tpc" exact component={TPC}></Route>
    </>
  );
}
