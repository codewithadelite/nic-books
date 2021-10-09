import React from 'react'

const Navigation = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light text-white shadow sticky-top fixed-top">
                <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="http://nic-books.herokuapp.com">
                    <b className="py-5 text-dark" style={{ fontSize:'26px'}}>NIC BOOKS TASK</b>
                </a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active ">
                        <a className="nav-link text-dark" href="http://nic-books.herokuapp.com"><b>BOOKS</b> <span className="sr-only">(current)</span></a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
    )
}

export default Navigation
