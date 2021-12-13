import React from 'react'

function Modal2({ id, titulo, contenido, tipo1, habilidad }) {
  return (
    <div>
      <div className="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog container row">
          <div className="modal-content col">
            <div className="modal-header col ">
              <h5 className="modal-title text-capitalize" id="exampleModalLabel">{titulo} </h5>
              <button type="button col" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div >
              <div className="modal-body align-items-center row col">
                <img src={contenido} alt="" className="col img-fluid" />

              </div>
              <div className="modal-body align-items-center row col m-1 p-1">
                <p className="card-text text-capitalize col align-items-center m-1 p-1" >Type : {tipo1} </p>
                <p className="card-text text-capitalize col align-items-center m-1 p-1" >ability : {habilidad} </p>
              </div>
            </div>

            <div className="modal-footer col">
              <button type="button" className="btn btn-secondary col" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal2
