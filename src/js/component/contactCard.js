import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import { stringify } from "query-string";

export const ContactCard = ({ contact }) => {
  const { store, actions } = useContext(Context);
  const contactId = contact.id;
  const contactIdString = contactId.toString();
  const navigate = useNavigate();
  console.log(contactIdString);
  const handleClick = () => {
    navigate("/edit/" + contactIdString);
  };

  return (
    <div className="card mb-3" style={{ maxWidth: "100%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://imgs.elpais.com.uy/dims4/default/1f7bede/2147483647/strip/true/crop/1091x750+0+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fcd%2F62%2Fd80bb2814c248349c1b7ae56ea48%2Fdiseno-sin-titulo.jpg"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{contact.full_name}</h3>
            <p className="card-text fs-3">{contact.email}</p>
            <p className="card-text fs-3">{contact.phone}</p>
            <p className="card-text fs-3">{contact.address}</p>
            <button className="btn btn-secondary" onClick={handleClick}>
              Editar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => actions.deleteContact(contact.id)}
            >
              Borrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
