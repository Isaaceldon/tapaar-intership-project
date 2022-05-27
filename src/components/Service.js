
import React from 'react'
import '../css/service.css'
export default function Service({item}) {
  return (
          <div className="card col-md-3 m-3 p-3" key={item.id}>
            <span className="text-center sercice-icon"><i className="fas fa-icons mb-2"></i></span>
            <h4>{item.name}</h4>
            <p className="mb-2">
             {item.description}
            </p>
          </div>
  )
}
