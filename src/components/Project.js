import React from 'react'
import {NavLink } from 'react-router-dom'

export default function Project({item_project}) {
  return (
<div className="card col-md-3 m-3 p-3" key={item_project.id}>
  <img src={item_project.image} className="card-img-top" alt=""  />
  <div className="card-body">
    <h5 className="card-title">{item_project.type}</h5>
    <p className="card-text">{item_project.libelle}</p>
   
  </div>
</div>
  )
}
