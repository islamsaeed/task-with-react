import React from "react";
import { useDispatch } from "react-redux";
import { deleteMovement } from "../redux/movementSlice";

const ReoverMoveditem = ({ id, title }) => {

  const dispatch = useDispatch();


  const handleDeleteItem = (id) => {
    dispatch(deleteMovement({ id }));
  };

  return (
    <li className={`list-group-item ${title === 'not supported' ? 'bg-warning' : 'list-group-item-success'}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">

          {
            title === 'not supported' ?
              <div className={`mr-3 `}>🥶ركز يا اخينا👺</div>
              : <div className={`mr-3 `}>🏇🏻ودى يا جماله😎</div>
          }
          {title}
        </span>
        <button className="btn btn-outline-danger" onClick={() => { handleDeleteItem(id) }}>
          Delete
        </button>
      </div >
    </li >
  );
};

export default ReoverMoveditem;
