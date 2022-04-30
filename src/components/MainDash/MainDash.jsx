import React from 'react'
import Card from '../ReusableComponents/Card/Card'
import "./MainDash.css"
import "./MainDashResponsive.css"
import { cardData } from '../../data/data'
import Table from '../Table/Table'

const MainDash = () => {
  return (
    <div className="main-dash">
      <h1>Dashboard</h1>
      <div className="cards-container">
        {cardData.map((card, index) => {
          return <Card key={index} card={card} />
        })}
      </div>
      <Table />
    </div>
  )
}

export default MainDash