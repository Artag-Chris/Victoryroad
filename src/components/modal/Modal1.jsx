import React from 'react'

function Modal1({url,name,id}) {
   //responsive Iframe for youtube video 

  return (
    <div classNameName="container">
      <div className="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">{name} </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body container-fluid">
        
            <iframe width="460" height="315" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video"></iframe>
            </div>
            <div className="container">{name} </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal1
