import React from 'react'
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div >
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <Link to={'/'}>
                    <a className="align-left p-2" href="#">
                        <img src="./Artba-transparent-logo.png" width="25%" className="align-middle" alt="" loading="lazy" />
                    </a>
                </Link>
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link disabled" href="#">Admin</a>
                        </div>
                    </div>
                </div>
               
            </nav>
        </div>

    )
}
