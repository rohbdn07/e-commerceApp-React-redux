import React from 'react'

export default function Menubar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border border-bottom-1">
                <div className="col-lg-8 container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle navbar-brand" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All catogery
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Item no. 1</a></li>
                                    <li><a className="dropdown-item" href="#">Items no. 2</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Catogory 3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Fashion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Supermarket</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Electronics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Baby and Toys</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Fitness sport</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Furnitures</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
