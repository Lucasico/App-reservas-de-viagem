import React from "react";
import { MdDelete, MdAddCircle, MdRemoveCircle } from "react-icons/md";
import "./style.css";
import {
  removeReserve,
  updateAmountReserve,
} from "../../store/modules/reserve/actions";
//reposanvél por conectar o redux com os reducers
import { useSelector, useDispatch } from "react-redux";
export default function Reservas() {
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reducerReserver);
  const handleRemove = (id) => {
    dispatch(removeReserve(id));
  };

  const decrementAmount = (reserver) => {
    dispatch(updateAmountReserve(reserver.id, reserver.amount - 1));
  };

  const incrementAmount = (reserver) => {
    dispatch(updateAmountReserve(reserver.id, reserver.amount + 1));
  };

  return (
    <div>
      <h1 className="title">Voce solicitou {reserves.length} reserva</h1>
      {reserves.map((reserve) => (
        <div className="reservas" key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <div id="amount">
            <button type="button" onClick={() => decrementAmount(reserve)}>
              <MdRemoveCircle size={25} color="#191919" />
            </button>
            <input type="text" readOnly value={reserve.amount} />
            <button type="button" onClick={() => incrementAmount(reserve)}>
              <MdAddCircle size={25} color="#191919" />
            </button>
          </div>

          <button type="button" onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="black" />
          </button>
        </div>
      ))}
      <footer>
        <button type="button">Solicitar reservas</button>
      </footer>
    </div>
  );
}
