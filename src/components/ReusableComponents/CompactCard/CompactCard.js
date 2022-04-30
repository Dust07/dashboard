import React from 'react'
import "./CompactCard.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
const CompactCard = ({ card, setExpanded }) => {
  const { title, color, barValue, value, png, series } = card;
  const Png = png;
  return (
    <motion.div className="compact-card"
      onClick={setExpanded}
      style={{
        background: color.background,
        boxShadow: color.boxShadow
      }}
      layoutId="expandableCard">
      <div className="radial-chart">
        <CircularProgressbar
          value={barValue}
          text={`${barValue}%`}
        />
        <span>{title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${value}</span>
        <span>Last 24 hours</span>

      </div>
    </motion.div>
  )
}

export default CompactCard