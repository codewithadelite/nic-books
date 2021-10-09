import React from 'react'

const Footer = (props) => {
    return (
        <nav className="fixed-bottom p-3">
                <div className="container text-dark text-center">
                    <h6>
                       <strong> &copy;This task made by Niyonshuti Shema Adelite | Number of found items(Books) {props.booksToDisplay.length} / {props.books.length} </strong>
                    </h6>
                </div>
        </nav>
    )
}

export default Footer
