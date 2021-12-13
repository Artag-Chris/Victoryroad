import React from 'react'
import "./styles.css"

function Smogon() {
    return (
        <div className="responsive container row">
            <div className="w-100 h-100 row"></div>
            <iframe title="team" className="col img-fluid" src="https://www.smogon.com/" frameborder="0"  />
        </div>
    )
}

export default Smogon
