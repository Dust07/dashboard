import React from 'react'
import { motion } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./CompactCard.css"
import "./CompactCardResponsive.css"

const CompactCard = ({ card, setExpanded }) => {
  const { title, color, barValue, value, png } = card;
  const Png = png;
  return (
    <motion.div
      layoutId={title}
      className="compact-card"
      onClick={setExpanded}
      style={{
        background: color.background,
        boxShadow: color.boxShadow
      }}
    >
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