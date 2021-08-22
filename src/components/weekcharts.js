import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import * as Rates from "../controllers/rates";
import * as Reports from "../controllers/reports";
import { Link } from "react-router-dom";
function IFR() {
  const [chartOptions, setchartOptioins] = useState({
    options: {
      chart: {
        id: "ifr-chart",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
      noData: {
        text: "Loading....",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#fff",
          fontSize: "14px",
          fontFamily: "Montserrat",
        },
      },
    },
    series: [
      {
        name: "IFR Rate",
        data: [],
      },
    ],
  });
  useEffect(() => {
    UpdateChart();
  }, []);
  async function UpdateChart() {
    let data = await Rates.thisWeek_IFR();
    let rateData = {
      date: [],
      rate: [],
    };
    data.forEach((obj, i) => {
      rateData.date.push(obj.date);
      rateData.rate.push(obj.rate);
    });
    setchartOptioins({
      options: {
        chart: {
          id: "ifr-chart",
          foreColor: "#ffffff99",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 1500,
            animateGradually: {
              enabled: true,
              delay: 1000,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 1000,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: rateData.date.reverse(),
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return parseFloat(value.toPrecision(5));
            },
          },
        },
      },
      series: [
        {
          name: "IFR Rate",
          data: rateData.rate.reverse(),
        },
      ],
    });
  }
  return (
    <div className="card">
      <div className="card-head">
        <div>Infection Fatality Ratio (Last 7 Days)</div>
        <Link className="ml-auto ico-20" to="/info/ifr">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
              fill="currentColor"
            />
            <path
              d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
      <div className="card-body">
        <div className="chart-container" id="CRT_IFR">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="area"
          />
        </div>
      </div>
    </div>
  );
}
function CFR() {
  const [chartOptions, setchartOptioins] = useState({
    options: {
      chart: {
        id: "cfr-chart",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
      noData: {
        text: "Loading....",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#fff",
          fontSize: "14px",
          fontFamily: "Montserrat",
        },
      },
    },
    series: [
      {
        name: "IFR Rate",
        data: [],
      },
    ],
  });
  useEffect(() => {
    UpdateChart();
  }, []);
  async function UpdateChart() {
    let data = await Rates.thisWeek_CRF();
    let rateData = {
      date: [],
      rate: [],
    };
    data.forEach((obj, i) => {
      rateData.date.push(obj.date);
      rateData.rate.push(obj.rate);
    });
    setchartOptioins({
      options: {
        chart: {
          id: "cfr-chart",
          foreColor: "#ffffff99",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 1500,
            animateGradually: {
              enabled: true,
              delay: 1000,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 1000,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: rateData.date.reverse(),
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return parseFloat(value.toPrecision(5));
            },
          },
        },
      },
      series: [
        {
          name: "CFR Rate",
          data: rateData.rate.reverse(),
        },
      ],
    });
  }
  return (
    <div className="card">
      <div className="card-head">
        <div>Case Fatality Rate (Last 7 Days)</div>
        <Link className="ml-auto ico-20" to="/info/cfr">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
              fill="currentColor"
            />
            <path
              d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
      <div className="card-body">
        <div className="chart-container" id="CRT_CFR">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="area"
          />
        </div>
      </div>
    </div>
  );
}
function TPR() {
  const [chartOptions, setchartOptioins] = useState({
    options: {
      chart: {
        id: "TPR-chart",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
      noData: {
        text: "Loading....",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#fff",
          fontSize: "14px",
          fontFamily: "Montserrat",
        },
      },
    },
    series: [
      {
        name: "IFR Rate",
        data: [],
      },
    ],
  });
  useEffect(() => {
    UpdateChart();
  }, []);
  async function UpdateChart() {
    let data = await Rates.thisWeek_TPR();
    let rateData = {
      date: [],
      rate: [],
    };
    data.forEach((obj, i) => {
      rateData.date.push(obj.date);
      rateData.rate.push(obj.rate);
    });
    setchartOptioins({
      options: {
        chart: {
          id: "TPR-chart",
          foreColor: "#ffffff99",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 1500,
            animateGradually: {
              enabled: true,
              delay: 1000,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 1000,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: rateData.date.reverse(),
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return parseFloat(value.toPrecision(5));
            },
          },
        },
      },
      series: [
        {
          name: "TPR Rate",
          data: rateData.rate.reverse(),
        },
      ],
    });
  }
  return (
    <div className="card">
      <div className="card-head">
        <div>Test Positivity Rate (Last 7 Days)</div>
        <Link className="ml-auto ico-20" to="/info/tpr">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
              fill="currentColor"
            />
            <path
              d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
      <div className="card-body">
        <div className="chart-container" id="CRT_TPR">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="area"
          />
        </div>
      </div>
    </div>
  );
}
function TPC() {
  const [chartOptions, setchartOptioins] = useState({
    options: {
      chart: {
        id: "TPC-chart",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
      noData: {
        text: "Loading....",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#fff",
          fontSize: "14px",
          fontFamily: "Montserrat",
        },
      },
    },
    series: [
      {
        name: "IFR Rate",
        data: [],
      },
    ],
  });
  useEffect(() => {
    UpdateChart();
  }, []);
  async function UpdateChart() {
    let data = await Rates.thisWeek_TPC();
    let rateData = {
      date: [],
      rate: [],
    };
    data.forEach((obj, i) => {
      rateData.date.push(obj.date);
      rateData.rate.push(obj.rate);
    });
    setchartOptioins({
      options: {
        chart: {
          id: "TPC-chart",
          foreColor: "#ffffff99",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 1500,
            animateGradually: {
              enabled: true,
              delay: 1000,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 1000,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: rateData.date.reverse(),
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return parseFloat(value.toPrecision(5));
            },
          },
        },
      },
      series: [
        {
          name: "TPC Rate",
          data: rateData.rate.reverse(),
        },
      ],
    });
  }
  return (
    <div className="card">
      <div className="card-head">
        <div>Tests Per Capita (Last 7 Days)</div>
        <Link className="ml-auto ico-20" to="/info/tpc">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
              fill="currentColor"
            />
            <path
              d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
      <div className="card-body">
        <div className="chart-container" id="CRT_TPC">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="area"
          />
        </div>
      </div>
    </div>
  );
}
function PCPC() {
  const [chartOptions, setchartOptioins] = useState({
    options: {
      chart: {
        id: "PCPC-chart",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
      noData: {
        text: "Loading....",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#fff",
          fontSize: "14px",
          fontFamily: "Montserrat",
        },
      },
    },
    series: [
      {
        name: "IFR Rate",
        data: [],
      },
    ],
  });
  useEffect(() => {
    UpdateChart();
  }, []);
  async function UpdateChart() {
    let data = await Rates.thisWeek_PCPC();
    let rateData = {
      date: [],
      rate: [],
    };
    data.forEach((obj, i) => {
      rateData.date.push(obj.date);
      rateData.rate.push(obj.rate);
    });
    setchartOptioins({
      options: {
        chart: {
          id: "PCPC-chart",
          foreColor: "#ffffff99",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 1500,
            animateGradually: {
              enabled: true,
              delay: 1000,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 1000,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: rateData.date.reverse(),
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return parseFloat(value.toPrecision(5));
            },
          },
        },
      },
      series: [
        {
          name: "PCPC Rate",
          data: rateData.rate.reverse(),
        },
      ],
    });
  }
  return (
    <div className="card">
      <div className="card-head">
        <div>PCPC Rate (Last 7 Days)</div>
        <Link className="ml-auto ico-20">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 10.9794C11 10.4271 11.4477 9.97937 12 9.97937C12.5523 9.97937 13 10.4271 13 10.9794V16.9794C13 17.5317 12.5523 17.9794 12 17.9794C11.4477 17.9794 11 17.5317 11 16.9794V10.9794Z"
              fill="currentColor"
            />
            <path
              d="M12 6.05115C11.4477 6.05115 11 6.49886 11 7.05115C11 7.60343 11.4477 8.05115 12 8.05115C12.5523 8.05115 13 7.60343 13 7.05115C13 6.49886 12.5523 6.05115 12 6.05115Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
      <div className="card-body">
        <div className="chart-container" id="CRT_PCPC">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="area"
          />
        </div>
      </div>
    </div>
  );
}
function CASES() {
  const [chartOptions, setchartOptioins] = useState({
    options: {
      chart: {
        id: "CASES-chart",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
      noData: {
        text: "Loading....",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#fff",
          fontSize: "14px",
          fontFamily: "Montserrat",
        },
      },
    },
    series: [
      {
        name: "IFR Rate",
        data: [],
      },
    ],
  });
  useEffect(() => {
    UpdateChart();
  }, []);
  async function UpdateChart() {
    let data = await Reports.getHistory();
    data = data.data;
    let rateData = {
      date: [],
      rate: [],
    };
    for (let i = 0; i < 8; i++) {
      const curObj = data[i];
      rateData.date.push(curObj.date);
      rateData.rate.push(curObj.cases_count);
    }
    setchartOptioins({
      options: {
        chart: {
          id: "CASES-chart",
          foreColor: "#ffffff99",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 1500,
            animateGradually: {
              enabled: true,
              delay: 1000,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 1000,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: rateData.date.reverse(),
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return parseFloat(value.toPrecision(5));
            },
          },
        },
      },
      series: [
        {
          name: "Reported Cases",
          data: rateData.rate.reverse(),
        },
      ],
    });
  }
  return (
    <div className="card">
      <div className="card-head">
        <div>Reported patients (last 7 days)</div>
      </div>
      <div className="card-body">
        <div className="chart-container" id="CRT_CASES">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="area"
          />
        </div>
      </div>
    </div>
  );
}
function DEATHS() {
  const [chartOptions, setchartOptioins] = useState({
    options: {
      chart: {
        id: "DEATHS-chart",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
      noData: {
        text: "Loading....",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#fff",
          fontSize: "14px",
          fontFamily: "Montserrat",
        },
      },
    },
    series: [
      {
        name: "IFR Rate",
        data: [],
      },
    ],
  });
  useEffect(() => {
    UpdateChart();
  }, []);
  async function UpdateChart() {
    let data = await Reports.getHistory();
    data = data.data;
    let rateData = {
      date: [],
      rate: [],
    };
    for (let i = 0; i < 8; i++) {
      const curObj = data[i];
      rateData.date.push(curObj.date);
      rateData.rate.push(curObj.deaths_count);
    }
    setchartOptioins({
      options: {
        chart: {
          id: "DEATHS-chart",
          foreColor: "#ffffff99",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 1500,
            animateGradually: {
              enabled: true,
              delay: 1000,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 1000,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: rateData.date.reverse(),
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return parseFloat(value.toPrecision(5));
            },
          },
        },
        colors: ["#ff5151"],
      },
      series: [
        {
          name: "Reported DEATHS",
          data: rateData.rate.reverse(),
        },
      ],
    });
  }
  return (
    <div className="card">
      <div className="card-head">
        <div>Dead patients (last 7 days)</div>
       </div>
      <div className="card-body">
        <div className="chart-container" id="CRT_DEATHS">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="area"
          />
        </div>
      </div>
    </div>
  );
}
function RECOVERED() {
  const [chartOptions, setchartOptioins] = useState({
    options: {
      chart: {
        id: "RECOVERED-chart",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
      noData: {
        text: "Loading....",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#fff",
          fontSize: "14px",
          fontFamily: "Montserrat",
        },
      },
    },
    series: [
      {
        name: "IFR Rate",
        data: [],
      },
    ],
  });
  useEffect(() => {
    UpdateChart();
  }, []);
  async function UpdateChart() {
    let data = await Reports.getHistory();
    data = data.data;
    let rateData = {
      date: [],
      rate: [],
    };
    for (let i = 0; i < 8; i++) {
      const curObj = data[i];
      rateData.date.push(curObj.date);
      rateData.rate.push(curObj.recoveries_count);
    }
    setchartOptioins({
      options: {
        chart: {
          id: "RECOVERED-chart",
          foreColor: "#ffffff99",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 1500,
            animateGradually: {
              enabled: true,
              delay: 1000,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 1000,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: rateData.date.reverse(),
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return parseFloat(value.toPrecision(5));
            },
          },
        },
        colors: ["#7eff51"],
      },
      series: [
        {
          name: "Reported RECOVERED",
          data: rateData.rate.reverse(),
        },
      ],
    });
  }
  return (
    <div className="card">
      <div className="card-head">
        <div>Recovered patients (last 7 days)</div>
       </div>
      <div className="card-body">
        <div className="chart-container" id="CRT_RECOVERED">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="area"
          />
        </div>
      </div>
    </div>
  );
}
function ALLDATA() {
  const [chartOptions, setchartOptioins] = useState({
    options: {
      chart: {
        id: "RECOVERED-chart",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
      noData: {
        text: "Loading....",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#fff",
          fontSize: "14px",
          fontFamily: "Montserrat",
        },
      },
    },
    series: [
      {
        name: "IFR Rate",
        data: [],
      },
    ],
  });
  useEffect(() => {
    UpdateChart();
  }, []);
  async function UpdateChart() {
    let data = await Reports.getHistory();
    data = data.data;
    let dates = [];
    let recoveries = [];
    let deaths = [];
    let cases = [];
    for (let i = 0; i < 8; i++) {
      const curObj = data[i];
      dates.push(curObj.date);
      recoveries.push(curObj.recoveries_count);
      deaths.push(curObj.deaths_count);
      cases.push(curObj.cases_count);
    }
    setchartOptioins({
      options: {
        chart: {
          id: "RECOVERED-chart",
          foreColor: "#ffffff99",
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 1500,
            animateGradually: {
              enabled: true,
              delay: 1000,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 1000,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: dates.reverse(),
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return parseFloat(value.toPrecision(5));
            },
          },
        },
        colors: ["#7eff51", "#ff5151", "#51e0ff"],
      },
      series: [
        {
          name: "Recovered Patients",
          data: recoveries.reverse(),
        },
        {
          name: "Reported Deaths",
          data: deaths.reverse(),
        },
        {
          name: "Reported Cases",
          data: cases.reverse(),
        },
      ],
    });
  }
  return (
    <div className="card">
      <div className="card-head">
        <div>Deaths, Cases, Recovered (last 7 days)</div>
       </div>
      <div className="card-body">
        <div className="chart-container" id="CRT_RECOVERED">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="area"
            height="350"
          />
        </div>
      </div>
    </div>
  );
}
function ALLDATADONUT() {
  const [chartOptions, setchartOptioins] = useState({
    series: [],
    options: {
      chart: {
        type: "donut",
        foreColor: "#ffffff99",
      },
      colors: ["#7eff51", "#ff5151", "#51e0ff"],
      labels: ["Recovered", "Deaths", "Active Cases"],
      noData: {
        text: "Loading....",
        align: "center",
        verticalAlign: "middle",
        offsetX: 0,
        offsetY: 0,
        style: {
          color: "#fff",
          fontSize: "14px",
          fontFamily: "Montserrat",
        },
      },
    },
  });
  useEffect(() => {
    UpdateChart();
  }, []);
  async function UpdateChart() {
    let data = await Reports.getTodayData();
    data = data.data;
    let deaths = data.local_deaths;
    let recovered = data.local_recovered;
    let active_cases = data.local_active_cases;
    setchartOptioins({
      series: [recovered, deaths, active_cases],
      options: {
        chart: {
          type: "donut",
          foreColor: "#ffffff99",
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: "Something",
                value: 123456,
              },
            },
          },
        },
        colors: ["#7eff51", "#ff5151", "#51e0ff"],
        labels: [
          "Recovered - " + recovered,
          "Deaths - " + deaths,
          "Active Cases - " + active_cases,
        ],
        responsive: [
          {
            breakpoint: 768,
            options: {
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    });
  }
  return (
    <div className="card">
      <div className="card-head">
        <div>Summery ( Since 2020/02 )</div>
       </div>
      <div className="card-body">
        <div className="chart-container" id="CRT_RECOVERED">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="donut"
            height="280"
          />
        </div>
      </div>
    </div>
  );
}
export {
  IFR,
  CFR,
  TPR,
  TPC,
  PCPC,
  CASES,
  DEATHS,
  RECOVERED,
  ALLDATA,
  ALLDATADONUT,
};
