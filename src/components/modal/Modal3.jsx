import React from 'react'

function Modal3({name,img,types,habilidad}) {
    //fuccion para cambiar el background de la imagen
    const changeBackground = (e) => {
        e.target.style.background = '#000000'
    }
    
    
    
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{name} </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={img} alt="" onClick={changeBackground} />
                        <p>{types}</p> 
                        <p>{habilidad} </p>    
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal3
