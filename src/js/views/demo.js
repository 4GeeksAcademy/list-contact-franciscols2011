import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Demo = () => {
  return (
    <div className="container">
      <h1> Add new contact</h1>
      <form>
        <div className="form-group">
          <label>Full name</label>
          <input type="text" className="form-control" placeholder="Full name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="phone"
            className="form-control"
            placeholder="Enter phone"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter address"
          />
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary w-100"
    
        >
          save
        </button>
      </form>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
