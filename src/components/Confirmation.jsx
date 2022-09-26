import { React, useState, useContext } from 'react'
import { EventContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
    const { hit } = useContext(EventContext);
    const navigate = useNavigate();
    setTimeout(function () {
   navigate("/")
    }, 10000)
  return (
      <div className="container mt-5">
        <img className='mb-3' src="./checked.png" width="15%" alt="ArtBA Logo" />

          <h4>{hit?.FullName} have been successfully checked-in!</h4>
          <h2>Please grab your badge at the registration desk.</h2>
          <a
          onClick={() => navigate("/")}
              href="#" className="btn btn-success mt-3">Start a New Check In</a>
      </div>
  )
}
