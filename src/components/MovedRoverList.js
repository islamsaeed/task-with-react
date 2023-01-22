import React from "react";
import ReoverMoveditem from "./ReoverMoveditem";
import { useSelector } from "react-redux";

const MovedRoverList = () => {
  const movements = useSelector((state) => state.movements);
  return (
    <ul className="list-group">
      {movements.map((movement) => (
        <ReoverMoveditem key={movement.id} id={movement.id} title={movement.movementResult} />
      ))}
    </ul>
  );
};

export default MovedRoverList;
