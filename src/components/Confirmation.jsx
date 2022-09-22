import { React, useState, useContext } from 'react'
import { EventContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
    const { hit } = useContext(EventContext);
    const navigate = useNavigate();

  return (
      <div className="container mt-5">
        <img className='mb-3' src="./checked.png" width="15%" alt="ArtBA Logo" />

          <h3>{hit?.FullName} have been successfully checked-in!</h3>
          <p>Please grab your badge at the registration desk.</p>
          <img src="./reg.jpg" width="30%" className='rounded' alt="" />
          <br/>
          <a
          onClick={() => navigate("/")}
              href="#" className="btn btn-success mt-3">Start a New Check In</a>
      </div>
  )
}
