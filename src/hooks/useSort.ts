import { useState } from 'react'
import { useSubsContext } from './useSubsContext'

export function useSort() {
  const { subs, setSubs } = useSubsContext()
  const [isOpen, setIsOpen] = useState(false)
  const [sort, setSort] = useState('')

  function handleSort(event: any) {
    setIsOpen(false)
    const newSort = event.target.ariaLabel
    const subsSorted = subs.toSorted((subA, subB): number => {
      if (newSort === 'price') {
        const priceA = Number(subA.price.toString().replace(/\D/g, ''))
        const priceB = Number(subB.price.toString().replace(/\D/g, ''))
        return newSort === sort ? priceA - priceB : priceB - priceA
      }

      if (newSort === 'name') {
        const nameA = subA.name.toUpperCase()
        const nameB = subB.name.toUpperCase()
        if (nameA < nameB) {
          return newSort === sort ? 1 : -1
        }
        if (nameA > nameB) {
          return newSort === sort ? -1 : 1
        }
        return 0
      }

      if (newSort === 'date') {
        const dateA = new Date(subA.date).toString()
        const dateB = new Date(subB.date).toString()
        return newSort === sort
          ? Date.parse(dateB) - Date.parse(dateA)
          : Date.parse(dateA) - Date.parse(dateB)
      }
      return 0
    })
    setSubs(subsSorted)
    localStorage.setItem('subs', JSON.stringify(subsSorted))
    setSort((prevSort) => (prevSort === newSort ? '' : newSort))
  }

  function toggleOpen() {
    setIsOpen(!isOpen)
  }

  return { handleSort, toggleOpen, isOpen }
}
