import React from 'react'

export const Header = () => {
    return (
        <div className="d-flex py-2 px-3 bg-dark justify-content-between">
            <div className=" rounded-circle bg-light px-2 py-2"><i className="fas fa-2x fa-dog"></i></div>
            <div className="col-10 col-lg-4 d-flex justify-content-end text-light">
               <h5>Buscar</h5>
            </div>

        </div>
    )
}
