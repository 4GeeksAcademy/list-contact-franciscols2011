import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    await actions.addContact(fullName, email, phone, address);
    navigate("/");
  };

  return (
    <div className="addContactCard">
      <div className="w-50 col-4 mx-auto mb-3">
        <label className="form-label" htmlFor="name">
          Nombre Completo
        </label>
        <input
          className="form-control"
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          id="name"
          name="name"
          placeholder="Nombre Completo"
        />
      </div>

      <div className="w-50 col-4 mx-auto mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="w-50 col-4 mx-auto mb-3">
        <label className="form-label" htmlFor="phone">
          Celular
        </label>
        <input
          className="form-control"
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          id="phone"
          name="phone"
          placeholder="Celular"
        />
      </div>
      <div className="w-50 col-4 mx-auto mb-3">
        <label className="form-label" htmlFor="address">
          Direccion
        </label>
        <input
          className="form-control"
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          id="address"
          name="address"
          placeholder="Direccion"
        />
      </div>
      <button onClick={handleClick} className="btn btn-primary form-control">
        Guardar
      </button>
    </div>
  );
};
