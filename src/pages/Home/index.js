import React, { useState, useEffect } from "react";
import api from "../../services/http";
import { useDispatch } from "react-redux";
import { addReserve } from "../../store/modules/reserve/actions";
import { MdFlightTakeoff } from "react-icons/md";
import "./style.css";

export default function Home() {
  //usado para disparar um action
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    loadApi();
  }, []);

  async function loadApi() {
    const response = await api.get("trips");
    setTrips(response.data);
  }
  
  const handleAdd = (trip) => {
    //disparando a action, com tipo obrigatorio
    dispatch(addReserve(trip));
  };

  return (
    <div>
      <div className="box">
        {trips.map((trip) => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong data-testid="title">{trip.title}</strong>
            <span>Status: {trip.status ? "Disponivel" : "Indisponivel"}</span>
            <button type="button" onClick={() => handleAdd(trip)}>
              <div>
                <MdFlightTakeoff size={16} color="#FFF" />
              </div>
              <span>SOLICITAR RESERVA</span>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}
