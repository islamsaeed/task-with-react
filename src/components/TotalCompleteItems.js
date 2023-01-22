import React from "react";
import { useSelector } from "react-redux";


const TotalCompleteItems = () => {
  const completedCount =
    useSelector((state) => state.movements.filter((movement) => movement.movementResult === 'not supported'));
  console.log(completedCount)
  return (
    <h4 className="mt-3 text-light ">
      Total Not Supported: <strong className="text-warning">{completedCount.length > 0 ? completedCount.length + ' : شوفت يا عم  😡 ' : '0  :🥳🧙🏼‍♂️ جمال و دلاال'} </strong>
    </h4>
  );
};

export default TotalCompleteItems;
