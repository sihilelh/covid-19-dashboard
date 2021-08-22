import * as Report from "./reports";

/**
 * In covid-19 we have some rates
 *
 * 1. IFR (Infection Fatality Ratio)
 * Formula :-
 *      IFR = Deaths / Infected People * 100
 *
 * 2.CRF (Case Fatality Ratio)
 * Formula :-
 *      CRF = Deaths / Infected people of all the time * 100
 *
 * 3. Test positivity rate
 * Formula:-
 *      TPR = Tests Count / Positive Count * 100
 *
 * 4.Tests per capita
 * Formula:-
 *      TPC = Tests Count / County population
 * Note:- Increasing this good
 *
 * 5. Positive cases per capita
 * Formula:-
 *      PCPC = Positive Cases / Country Population
 * Note:- Increasing this is a dangorous thing. 5^ Dangerous, 2.5^ Controlled, .5 ^ Modarate Spred, less than .5 Low Spred
 */
let population = 21803000;
async function getWeekData() {
  let historyData = await Report.getHistory();
  let currentData = await Report.getTodayData();
  currentData = currentData.data;
  historyData = historyData.data;
  let week = [];
  for (let i = 0; i <= 7; i++) {
    let antigen = parseInt(
      currentData.daily_antigen_testing_data[i].antigen_count
    );
    let pcr = parseInt(currentData.daily_pcr_testing_data[i].pcr_count);
    week.push({
      date: historyData[i].date,
      cases: historyData[i].cases_count,
      recover: historyData[i].recoveries_count,
      deaths: historyData[i].deaths_count,
      pcr_tests: pcr,
      antigen_tests: antigen,
      all_tests: pcr + antigen,
    });
  }
  return week;
}
async function thisWeek_IFR() {
  let currentData = await Report.getTodayData();
  currentData = currentData.data;
  let week = await getWeekData();
  let rates = [];

  let infected_people =
    currentData.local_total_cases - currentData.local_recovered;
  week.forEach((ele, i) => {
    let rate = (ele.deaths / infected_people) * 100;
    rates.push({
      date: ele.date,
      rate: rate,
    });
  });
  return rates;
}
async function thisWeek_CRF() {
  let weekData = await getWeekData();
  let currentData = await Report.getTodayData();
  currentData = currentData.data;
  let rates = [];
  weekData.forEach((ele, i) => {
    let rate = (ele.deaths / currentData.local_total_cases) * 100;
    rates.push({
      date: ele.date,
      rate: rate,
    });
  });
  return rates;
}

async function thisWeek_TPR() {
  let weekData = await getWeekData();
  let rates = [];
  weekData.forEach((ele, i) => {
    let rate = (ele.cases / ele.all_tests) * 100;
    rates.push({
      date: ele.date,
      rate: Math.round(rate * 100) / 100,
    });
  });
  return rates;
}
async function thisWeek_TPC() {
  let weekData = await getWeekData();
  let rates = [];
  weekData.forEach((ele, i) => {
    let rate = (ele.all_tests / population) * 100;
    rates.push({
      date: ele.date,
      rate: Math.round(rate * 100) / 100,
    });
  });
  return rates;
}
async function thisWeek_PCPC() {
  let weekData = await getWeekData();
  let rates = [];
  weekData.forEach((ele, i) => {
    let rate = (ele.cases / population) * 100;
    rates.push({
      date: ele.date,
      rate: rate,
    });
  });
  return rates;
}
export {
  thisWeek_IFR,
  thisWeek_CRF,
  thisWeek_TPR,
  thisWeek_TPC,
  thisWeek_PCPC,
};
