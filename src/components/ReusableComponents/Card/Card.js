import { useState } from 'react'
import "./Card.css"
import { AnimateSharedLayout } from 'framer-motion';
import ExpandedCard from '../ExpandedCard/ExpandedCard';
import CompactCard from '../CompactCard/CompactCard';

const Card = ({ card }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <AnimateSharedLayout>
      <div className="card-container absolute-center">
        {expanded ? <ExpandedCard card={card} setExpanded={() => setExpanded(false)} /> : <CompactCard card={card} setExpanded={() => setExpanded(true)} />}
      </div>
    </AnimateSharedLayout>

  )
}

export default Card