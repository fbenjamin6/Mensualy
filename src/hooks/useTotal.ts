import { useEffect, useState } from 'react'
import { useSubsContext } from './useSubsContext'
import { DateWithoutTimeZone } from '../utils/DateWithoutTimeZone'

export function useTotal() {
  const { subs } = useSubsContext()
  const [total, setTotal] = useState(0)
  const [alreadyPaid, setAlreadyPayid] = useState(0)

  useEffect(() => {
    setTotal(0)
    setAlreadyPayid(0)
    subs.forEach((sub) => {
      const amount = Number(sub.price.toString().replace(/\D/g, ''))
      const today = DateWithoutTimeZone(new Date(Date.now()))
      const todayDate = today.getDate()
      const payDay = DateWithoutTimeZone(new Date(sub.date))
      const payDayDate = payDay.getDate()

      setTotal((prevTotal) => (prevTotal += amount))

      if (todayDate >= payDayDate) {
        setAlreadyPayid((prev) => (prev += amount))
      }
    })
  }, [subs])

  return { total, alreadyPaid }
}
