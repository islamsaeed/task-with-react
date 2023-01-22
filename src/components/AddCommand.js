import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTMovement } from "../redux/movementSlice";
import { moveRoverfunction } from '../MainHFunc';

const AddCommand = () => {

  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  //our function constants
  const X = 2;
  const Y = 3;
  const heading = "NORTH";

  const onSubmit = (event) => {
    event.preventDefault();
    const myFuncResult = moveRoverfunction(X, Y, heading, value);
    dispatch(
      addTMovement({
        movementResult: myFuncResult,
      })
    );
    console.log(myFuncResult);
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="enter [F, B, L, R] Command"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-info mb-2 rounded-pill">
        Submit
      </button>
    </form >
  );
};

export default AddCommand;
