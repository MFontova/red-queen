import { CaretDown } from "@/icons/CaretDown"
import type React from "react"
import { useState } from "react"

interface ExpandableLetterProps {
  expanded: boolean,
  children: React.ReactNode
}

export const ExpandableLetter: React.FC<ExpandableLetterProps> = ({expanded, children}) => {
  const [expandedState, setExpandedState] = useState(expanded)

  const handleToggle = () => {
    setExpandedState(!expandedState)
  }

  return (
    <section className="bg-orange-50 p-5 rounded-md text-orange-900 font-medium flex flex-col gap-5 font-merriweather">
      <div className="flex justify-between items-center" onClick={handleToggle}>
        <p className="font-bold">Carta de Malo Maloso</p>
        {
          expandedState
            ? <CaretDown/>
            : <CaretDown/>
        }
      </div>
      {expandedState && children}
    </section>
  )
}