import React from "react";
import { MdDelete } from "react-icons/md";
import "./style.css";
import { removeReserve } from "../../store/modules/reserve/actions";
//reposanvél por conectar o redux com os reducers
import { useSelector, useDispatch } from "react-redux";
export default function Reservas() {
  const dispatch = useDispatch();
  const reserves = useSelector((state) => state.reducerReserver);
  const handleRemove = (id) => {
    dispatch(removeReserve(id));
  };
  return (
    <div>
      <h1 className="title">Voce solicitou {reserves.length} reserva</h1>
      {reserves.map((reserve) => (
        <div className="reservas" key={reserve.id}>
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <span>Quantidade: {reserve.amount}</span>
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
