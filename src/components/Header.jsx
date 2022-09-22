import React from 'react'

export default function Header() {
    return (
        <div >
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <a className="align-left p-2" href="#">
                        <img src="./Artba-transparent-logo.png" width="25%" className="align-middle" alt="" loading="lazy" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
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
