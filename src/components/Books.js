import React from 'react'
import BooksSkeleton from '../loading/BooksSkeleton'

const Books = (props) => {
    return (
        <div className="container mb-5">
            {props.loading ? 
            <BooksSkeleton/>
            :
            props.booksToDisplay.length < 1 ? 
                <div className="conatiner">
                    <div className="alert alert-danger mt-4 p-5">
                        <span className="alert alert-title text-dark">
                            <strong>Sorry Your Filter Item Not Found</strong>
                        </span>
                    </div>
                </div> :

<div className="container">
<h3 className="mt-3">
    <strong>
        Books List
    </strong>
</h3>
<div className="row mt-3">
    {props.booksToDisplay.map((item, index) => {
        return(
            <div className="col-md-4 mb-4" key={item.id}>
                <div className="image" data-toggle="modal" data-target={"#"+item.id}>
                    <img src={ item.image} alt={item.name}/>
                </div>
                <div className="book-name mt-1">
                    <h6 className="text-primary font-weight-bold">
                        <b style={{cursor:'pointer'}}>
                        {item.brief_name}
                        </b>
                    </h6>
                </div>
                <div className="mt-1">
                    <strong>Written By: {item.author}</strong>
                </div>
                <div className="modal fade" id={item.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
                    <div className="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                <strong>
                                    BOOK DESCRIPTION
                                </strong>
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <strong>
                                    <span aria-hidden="true">&times;</span>
                                </strong>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={ item.image} alt={item.name} style={{width:'100%'}}/>
                                </div>
                                <div className="col-md-6">
                                        <h5><strong>Book Name:</strong></h5>
                                        <span>{item.name}</span>

                                        <h5 className="mt-3"><strong>Category:</strong></h5>
                                        <span>{item.category}</span>

                                        <h5 className="mt-3"><strong>Author:</strong></h5>
                                        <span>{item.author}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    })}
</div>
</div>
            }
            
        
        </div>
    )
}

export default Books
