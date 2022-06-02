import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Skeleton } from "@chakra-ui/react";
import MoverBlock from "./MoverBlock";

function Movers() {
  const { movers, loading, error } = useContext(AppContext);

  return (
    <div className="card span2">
      <div className="cardTitle">
        <span>Top Movers</span>
      </div>
      {loading && !error ? (
        <>
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
        </>
      ) : (
        <div className="topMovers">
          <MoverBlock element={movers[0]} color="green" />
          <MoverBlock element={movers[1]} color="green" />
          <MoverBlock element={movers[2]} color="green" />
          <MoverBlock element={movers[99]} color="red" />
          <MoverBlock element={movers[98]} color="red" />
          <MoverBlock element={movers[97]} color="red" />
        </div>
      )}
    </div>
  );
}

export default Movers;
