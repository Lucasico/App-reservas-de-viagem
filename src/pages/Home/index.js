import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../../services/http";
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
    dispatch({
      type: "ADD_RESERVE",
      trip,
    });
  };
  return (
    <div>
      <div className="box">
        {trips.map((trip) => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
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
