import React from 'react'
import {NavLink } from 'react-router-dom'

export default function Project({item}) {
  return (
<div className="card col-md-3 m-3 p-3" key={item.id}>
  <img src={item.image} className="card-img-top" alt=""  />
  <div className="card-body">
    <h5 className="card-title">{item.type}</h5>
    <p className="card-text">{item.libelle}</p>
   
  </div>
</div>
  )
}
