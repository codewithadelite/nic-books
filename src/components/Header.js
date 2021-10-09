import React from 'react'

const Header = (props) => {
    return (
        <div className="header d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="search-container p-2">
                    <div className="row">
                        <div className="col-md-8 d-flex justify-content-between mt-2 mb-2">
                            <select className="search-select py-2" value={props.filterBy} onChange={(e) => props.updateFilter(e)}>
                                <option value="1">All</option>
                                <option value="2">Name</option>
                                <option value="3">Author</option>
                                <option value="4">Name and Author</option>
                                <option value="5">Category</option>
                            </select>
                            <input type="text" className="search-input py-2 pl-2" placeholder="Search" value={props.searchContent} onChange={(e) => props.updateSearchContent(e)}/>
                        </div>
                        <div className="col-md-4 mt-2 mb-2">
                            <button className="btn btn-dark btn-block py-3" onClick={props.filteringBooks}>
                                <strong>
                                    Search
                                </strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
