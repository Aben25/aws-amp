import { React, useState, useContext } from 'react'
import { EventContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function CheckIn() {
    const navigate = useNavigate();

    const { hit } = useContext(EventContext);

    const send = () => {
        const requestOptions = {
            method: 'POST',
            headers: {
                "Authorization": "Basic d2SuLwamTRQfEWqAuwBQ4zSTiSlq34mrICTaMeAIPS4=", 
                'Content-Type': 'application/json' }
        };
        fetch(`https://connect.artba.org/api/attendees/${hit.AttendeeUniqueID}/mark-attended`, requestOptions)
            .then(response => {
                console.log(response);
            }
            
        
).finally(() => {
    console.log("done");
    navigate("/Confirm");

})
    }


    return (
        <div className="container mt-5">
    
        <div className="card">
            <div className="card-header">
                    <h5> {hit?.CompanyName}</h5>
             
            </div>
            <div className="card-body">
                <h5 className="card-title">   {hit?.FullName}</h5>
                <div className="Email">{hit?.Email}</div>
                    <a onClick={() => { send(); }}
                     href="#" className="btn btn-success mt-3">Check In</a>
            </div>
        </div>
        </div>
    )
}
