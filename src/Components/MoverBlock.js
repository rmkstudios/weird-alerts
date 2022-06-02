import React from "react";
import PercentCleanedUp from "./PercentCleanedUp";
import { Badge } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function MoverBlock({ element, color }) {
  const navigate = useNavigate();
  return (
    <div
      className="moversCard"
      onClick={() => {
        navigate("/coins/" + element.id);
      }}
    >
      <div className="dotdotdot">{element.name}</div>
      <div>
        <Badge colorScheme={color} float="right" marginTop="2px">
          <PercentCleanedUp percent={element.price_change_percentage_24h} />%
        </Badge>
      </div>
    </div>
  );
}

export default MoverBlock;
