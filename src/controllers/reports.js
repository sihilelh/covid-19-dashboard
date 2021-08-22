import axios from "axios";
async function getTodayData() {
  return await axios
    .get("https://www.hpb.health.gov.lk/api/get-current-statistical")
    .then(async (res) => {
      return res.data;
    })
    .catch(async (err) => {
      return err.response;
    });
}
async function getHistory() {
  return axios
    .get("https://hpb.health.gov.lk/api/get-statistical-history-data")
    .then(async (res) => {
      return res.data;
    })
    .catch(async (err) => {
      return err.response;
    });
}
async function getMonthlyData() {
  let rawData = await getHistory();
  let data = rawData.data;
  let month_dataTemp = [];
  data.forEach((obj, i) => {
    let dateArr = obj.date.split("-");
    let month = dateArr[0] + "_" + dateArr[1];
    if (month_dataTemp.length === 0) {
      month_dataTemp.push({
        month: month,
        deaths: [obj.deaths_count],
        recoveries: [obj.recoveries_count],
        cases: [obj.cases_count],
      });
    } else {
      let Hasmonth = false;
      month_dataTemp.forEach((mon, i) => {
        if (mon.month === month) {
          Hasmonth = true;
          month_dataTemp[i].deaths.push(obj.deaths_count);
          month_dataTemp[i].recoveries.push(obj.recoveries_count);
          month_dataTemp[i].cases.push(obj.cases_count);
        } else {
          Hasmonth = false;
        }
      });
      if (
        Hasmonth === false &&
        month_dataTemp[month_dataTemp.length - 1].month !== month
      ) {
        month_dataTemp.push({
          month: dateArr[0] + "_" + dateArr[1],
          deaths: [obj.deaths_count],
          recoveries: [obj.recoveries_count],
          cases: [obj.cases_count],
        });
      }
    }
  });
  let monthly_data = [];
  month_dataTemp.forEach((monthObj, i) => {
    let deathsCount = 0;
    let recoveriesCount = 0;
    let casesCount = 0;
    monthObj.deaths.forEach((count) => {
      deathsCount += count;
    });
    monthObj.recoveries.forEach((count) => {
      recoveriesCount += count;
    });
    monthObj.cases.forEach((count) => {
      casesCount += count;
    });
    monthly_data.push({
      month: monthObj.month,
      deaths: deathsCount,
      recoveries: recoveriesCount,
      cases: casesCount,
    });
  });
  return { sparate: month_dataTemp, data: monthly_data };
}
async function getMonthlyTestingsData() {
  let rawData = await getTodayData();
  let pcrData = rawData.data.daily_pcr_testing_data;
  let antigenData = rawData.data.daily_antigen_testing_data;
  let curMonthPCR = null;
  let monthlyPCR = [];
  pcrData.forEach((obj, i) => {
    let dateArr = obj.date.split("-");
    let month = dateArr[0] + "_" + dateArr[1];
    if (monthlyPCR.length === 0) {
      monthlyPCR.push({
        month: month,
        pcr_count: [obj.pcr_count],
      });
    } else {
      if (curMonthPCR === month) {
        monthlyPCR[monthlyPCR.length - 1].pcr_count.push(obj.pcr_count);
      } else {
        monthlyPCR.push({
          month: month,
          pcr_count: [obj.pcr_count],
        });
      }
    }
    curMonthPCR = month;
  });
  let monthlyAntigen = [];
  let curMonthAntigen = null;
  antigenData.forEach((obj, i) => {
    let dateArr = obj.date.split("-");
    let month = dateArr[0] + "_" + dateArr[1];
    if (monthlyAntigen.length === 0) {
      monthlyAntigen.push({
        month: month,
        antigen_count: [obj.antigen_count],
      });
    } else {
      if (curMonthAntigen === month) {
        monthlyAntigen[monthlyAntigen.length - 1].antigen_count.push(
          obj.antigen_count
        );
      } else {
        monthlyAntigen.push({
          month: month,
          antigen_count: [obj.antigen_count],
        });
      }
    }
    curMonthAntigen = month;
  });
  let TotalMonthlyAntigen = [];
  let TotalMonthlyPCR = [];

  monthlyPCR.forEach((obj, i) => {
    let thisMonth = 0;
    obj.pcr_count.forEach((countObj) => {
      thisMonth += parseInt(countObj);
    });
    TotalMonthlyPCR.push({
      month: obj.month,
      pcr_count: thisMonth,
    });
  });
  monthlyAntigen.forEach((obj, i) => {
    let thisMonth = 0;
    obj.antigen_count.forEach((countObj) => {
      thisMonth += parseInt(countObj);
    });
    TotalMonthlyAntigen.push({
      month: obj.month,
      antigen_count: thisMonth,
    });
  });
  let TotalTestCount = [];
  TotalMonthlyPCR.forEach((obj, i) => {
    TotalTestCount.push({
      month: obj.month,
      count:
        TotalMonthlyPCR[i].pcr_count + TotalMonthlyAntigen[i].antigen_count,
    });
  });
  return {
    pcr: TotalMonthlyPCR,
    antigen: TotalMonthlyAntigen,
    all: TotalTestCount,
  };
}
async function getMonthlyAll() {
  let testCount = await getMonthlyTestingsData();
  let data = await getMonthlyData();
  let AllData = [];
  data = data.data;
  testCount.all.forEach((obj, i) => {
    if (data[i]) {
      if (data[i].month === obj.month) {
        AllData.push({
          month: obj.month,
          pcr_tests: testCount.pcr[i].pcr_count,
          antigen_tests: testCount.antigen[i].antigen_count,
          all_tests: obj.count,
          deaths: data[i].deaths,
          cases: data[i].cases,
          recoveries: data[i].recoveries,
        });
      } else {
        AllData.push({
          month: obj.month,
          pcr_tests: testCount.pcr[i].pcr_count,
          antigen_tests: testCount.antigen[i].antigen_count,
          all_tests: obj.count,
          deaths: NaN,
          cases: NaN,
          recoveries: NaN,
        });
      }
    } else {
      AllData.push({
        month: obj.month,
        pcr_tests: testCount.pcr[i].pcr_count,
        antigen_tests: testCount.antigen[i].antigen_count,
        all_tests: obj.count,
        deaths: 0,
        cases: 0,
        recoveries: 0,
      });
    }
  });
  return AllData;
}

async function getHistoryAll() {
  let history = await getHistory();
  let current = await getTodayData();
  history = history.data;
  current = current.data;

  console.log([history, current]);
}
export {
  getTodayData,
  getHistory,
  getMonthlyData,
  getMonthlyTestingsData,
  getMonthlyAll,
  getHistoryAll,
};
