import { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { Skeleton } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Badge } from "@chakra-ui/react";
import TooltipIcon from "./TooltipIcon";

function IndividualCoinStats({ currentCoin }) {
  const { loading, error } = useContext(AppContext);

  return (
    <div className="card">
      <div className="cardTitle">
        <span>Stats</span>
      </div>
      {loading && !error ? (
        <>
          <Skeleton height="30px" />
          <Skeleton height="30px" />
        </>
      ) : (
        <>
          <div className="statsCard">
            <div className="bold">
              Market Cap:{" "}
              <TooltipIcon text="Market Cap = Current Price x Circulating Supply" />
            </div>
            <div style={{ textAlign: "right" }}>
              <Badge>${currentCoin.market_cap.toLocaleString("en-US")}</Badge>
            </div>

            <div className="bold">
              All Time High:{" "}
              <TooltipIcon text="The highest price this coin has ever traded at." />
            </div>
            <div style={{ textAlign: "right" }}>
              ${currentCoin.ath.toLocaleString("en-US")}
            </div>

            <div className="bold">
              Circulating Supply:{" "}
              <TooltipIcon text="The amount of coins that are circulating in the market and are tradeable by the public." />
            </div>
            <div style={{ textAlign: "right" }}>
              {currentCoin.circulating_supply.toLocaleString("en-US")}
            </div>

            <div className="bold">
              Max Supply:{" "}
              <TooltipIcon text="The maximum number of coins coded to exist in the lifetime of the cryptocurrency." />
            </div>
            <div style={{ textAlign: "right" }}>
              {currentCoin.max_supply
                ? currentCoin.max_supply.toLocaleString("en-US")
                : "No Max Supply"}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default IndividualCoinStats;
