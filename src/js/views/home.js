import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard.js";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="mt-5">
        <div className="container">
          <div className="justify-content-right d-flex">
            <Link
              className="btn btn-success ml-auto mt-5 mb-3"
              to={"/add-contact"}
            >
              Agregar Contacto
            </Link>
          </div>

          <ul className="list-group">
            {store.contactList.map((item, index) => {
              return (
                <li className="list-group-item" key={index}>
                  <ContactCard contact={item} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
