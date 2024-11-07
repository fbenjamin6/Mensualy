import { createContext, useState } from 'react'
import { Subscription } from '../types/types'

interface SubsContextType {
  subs: Subscription[]
  setSubs: React.Dispatch<React.SetStateAction<Subscription[]>>
}

export const SubsContext = createContext<SubsContextType | undefined>(undefined)

export function SubsContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [subs, setSubs] = useState<Subscription[]>(() => {
    const getSubs = JSON.parse(window.localStorage.getItem('subs') as string)
    const subsMapped = getSubs?.map((sub: Subscription) => {
      const date = new Date(sub.date)
      return { ...sub, date }
    })
    return subsMapped || []
  })

  return (
    <SubsContext.Provider value={{ subs, setSubs }}>
      {children}
    </SubsContext.Provider>
  )
}
