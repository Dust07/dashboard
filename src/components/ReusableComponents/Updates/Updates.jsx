import React from 'react'
import "./Updates.css"
import "./UpdatesResponsive.css"
import { UpdatesData } from "../../../data/data"

const Updates = () => {
  return (
    <>
      <h3>Updates</h3>
      <div className="updates">
        {UpdatesData.map((data, index) => {
          return (
            <div className="update" key={index}>
              <img src={data.img} alt={data.name} className="noti-img" />
              <div className="noti">
                <span><strong>{data.name} </strong>{data.noti}</span>
                <span>{data.time}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>

  )
}

export default Updates