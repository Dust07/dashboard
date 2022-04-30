import { useState } from 'react'
import { motion } from 'framer-motion'
import "./Sidebar.css"
import "./SidebarResponsive.css"
import logo from "../../assets/logo.png"
import { sidebarData } from '../../data/data'
import {
  UilSignOutAlt,
  UilBars
} from "@iconscout/react-unicons"

const sidebarVariants = {
  true: {
    left: '0'
  },
  false: {
    left: "-60%"
  }
}
const Sidebar = () => {
  const [selected, setSelected] = useState(0)
  const [sidebarExpanded, setSidebarExpanded] = useState(window.innerWidth === 768 ? true : false)
  return (
    <>
      <div className="dropdown" onClick={() => {
        console.log(sidebarExpanded)
        setSidebarExpanded(!sidebarExpanded)
      }}>
        <UilBars />
      </div>

      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${sidebarExpanded}` : ""}
      >
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
      </motion.div>
    </>
  )
}

export default Sidebar