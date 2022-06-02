import React from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import PriceCleanedUp from "./PriceCleanedUp";
import PercentCleanedUp from "./PercentCleanedUp";
import Loading from "./Loading";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function CoinChart() {
  const { data, loading, error } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="card span2">
      <div className="cardTitle">
        <span>The Top 100</span>
      </div>
      {loading && !error ? (
        <Loading />
      ) : (
        <div>
          {data.map((element) => (
            <div
              className="displayCoins noselect"
              key={element.id}
              onClick={() => {
                navigate("/coins/" + element.id);
              }}
            >
              <div>
                <Badge className="noselect">{element.market_cap_rank}</Badge>
              </div>
              <img
                src={element.image}
                width="20px"
                alt={element.name}
                className="noselect"
              />
              <div className="dotdotdot">{element.name}</div>
              <div>
                $<PriceCleanedUp coin={element} />
              </div>
              <div>
                <Badge
                  className="floatRight"
                  colorScheme={element.price_change_24h >= 0 ? "green" : "red"}
                >
                  <PercentCleanedUp
                    percent={element.price_change_percentage_24h}
                  />
                  %
                </Badge>
              </div>
              <div className="chartIcon" style={{ textAlign: "right" }}>
                <ExternalLinkIcon />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CoinChart;
