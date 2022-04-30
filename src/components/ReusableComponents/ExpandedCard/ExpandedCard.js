import React from 'react'
import { UilTimes } from "@iconscout/react-unicons"
import Chart from "react-apexcharts"
import { motion } from "framer-motion"
import "./ExpandedCard.css"
import "./ExpandedCardResponsive.css"

const data = {
  options: {
    chart: {
      type: "area",
      height: "auto",
    },

    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },

    fill: {
      colors: ["#fff"],
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["white"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
  },
};

const ExpandedCard = ({ card, setExpanded }) => {
  const { title, color, series } = card;

  return (
    <motion.div
      layoutId={title}
      className="expanded-card"
      style={{
        background: color.background,
        boxShadow: color.boxShadow
      }}
    >

      <div className="close-btn" >
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{title}</span>
      <div className="chart-container">
        <Chart series={series} type="area" options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  )
}

export default ExpandedCard