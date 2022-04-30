import { useState } from 'react'
import "./Sidebar.css"
import logo from "../../assets/logo.png"
import {
  UilSignOutAlt
} from "@iconscout/react-unicons"
import { sidebarData } from '../../data/data'

const Sidebar = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="Sidebar">
      <div className="logo-container absolute-center">
        <img src={logo} alt="logo" className="logo" />
        <span className="shop-name">Shop</span>
      </div>

      <div className="navigation-container absolute-center">
        <ul className="navigation">
          {sidebarData.map((data, index) => {
            return (
              <li
                className={selected === index ? "navigation-item active" : "navigation-item"}
                key={index}
                onClick={() => setSelected(index)}>
                <data.icon />
                <p>{data.heading}</p>
              </li>
            )
          })}
          <div className="sign-out-btn">
            <UilSignOutAlt />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar