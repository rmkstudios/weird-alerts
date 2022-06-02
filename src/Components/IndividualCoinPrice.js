import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Skeleton } from "@chakra-ui/react";
import PriceCleanedUp from "./PriceCleanedUp";
import { Badge } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function IndividualCoinPrice({ currentCoin }) {
  const { loading, error } = useContext(AppContext);
  const coinGeckoURL = "https://www.coingecko.com/en/coins/" + currentCoin.id;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = currentCoin.name + " Coin Info - Weird Alerts";
  });

  return (
    <div className="card">
      <div className="cardTitle">
        <span>Current Price</span>
      </div>
      {loading && !error ? (
        <>
          <Skeleton height="30px" />
          <Skeleton height="30px" />
        </>
      ) : (
        <div className="coinPrice">
          <img src={currentCoin.image} />
          <div style={{ marginLeft: "6px" }}>
            {currentCoin.name} <Badge>#{currentCoin.market_cap_rank}</Badge>
          </div>
          <div className="bigPrice">
            $<PriceCleanedUp coin={currentCoin} />
          </div>
          <div className="span2">
            <Link href={coinGeckoURL} isExternal>
              View on CoinGecko <ExternalLinkIcon mx="2px" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default IndividualCoinPrice;
