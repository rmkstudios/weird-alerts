import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../AppContext";
import IndividualCoinPrice from "./IndividualCoinPrice";
import IndividualCoinStats from "./InvidualCoinStats";
import CoinChart from "./CoinChart";

function IndividualCoin() {
  const { data, loading, error, setLoading } = useContext(AppContext);
  const { coinID } = useParams();
  const currentCoin = data.find((element) => element.id === coinID);

  return (
    <div className="coinStats">
      {!loading && !error ? (
        <>
          <IndividualCoinPrice currentCoin={currentCoin} />
          <IndividualCoinStats currentCoin={currentCoin} />
        </>
      ) : (
        ""
      )}
      <CoinChart />
    </div>
  );
}

export default IndividualCoin;

/*



*/
