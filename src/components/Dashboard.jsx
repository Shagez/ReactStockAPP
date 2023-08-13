import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const apiKey = "0f84c28ef3a254fcef0d13591d7d6620";
  const [stocks, setStocks] = useState([]);
  // Create our effect
  useEffect(() => {
    // Create the function to run
    const getStocks = async () => {
      const response = await axios.get(
        `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${apiKey}`
      );
      let { data } = response;

      data.length = 10;

      setStocks(data);
    };
    getStocks();
  }, []);

  // map
  // filter
  // forEach
  // reduce
  // sort

  const stockList = stocks.map((element) => {
    return (
      <div className="stock-list">
        <p>{element.name}</p>
        <p>{element.price}</p>
        <p>{element.symbol}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Most Active Stocks</h1>
      <div className="table">
        <h4>Company Name</h4>
        <h4>Price</h4>
        <h4>Symbol</h4>
      </div>
      {stockList}
    </div>
  );
  // useEffect(() => {}, []), runs the first time the application shows on the screen and one time
  // useEffect(() => {}, [data]), runs based on the data
  // useEffect(() => {}), runs anytime
};

export default Dashboard;
