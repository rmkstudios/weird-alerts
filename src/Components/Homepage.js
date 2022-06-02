import React from "react";
import EmailAlert from "./EmailAlert";
import Movers from "./Movers";
import CoinChart from "./CoinChart";

function Homepage() {
  return (
    <>
      <EmailAlert />
      <Movers />
      <CoinChart />
    </>
  );
}

export default Homepage;
