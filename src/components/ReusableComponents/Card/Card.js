import { useState } from 'react'
import "./Card.css"
import "./CardResponsive.css"
import { LayoutGroup } from 'framer-motion';
import ExpandedCard from '../ExpandedCard/ExpandedCard';
import CompactCard from '../CompactCard/CompactCard';

const Card = ({ card }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <LayoutGroup>
      <div className="card-container absolute-center">
        {/* {expanded ? <ExpandedCard card={card} setExpanded={() => setExpanded(false)} /> : <CompactCard card={card} setExpanded={() => setExpanded(true)} />} */}
        <CompactCard card={card} setExpanded={() => setExpanded(true)} />
        {expanded && <ExpandedCard card={card} setExpanded={() => setExpanded(false)} />}
      </div>
    </LayoutGroup>

  )
}

export default Card