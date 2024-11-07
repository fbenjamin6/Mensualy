import { useEffect, useState } from 'react'

export function useDate() {
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')

  useEffect(() => {
    const todayDate = new Date(Date.now())
    const currentMonth = todayDate.getMonth() + 1
    const currentYear = todayDate.getFullYear()

    setMin(`${currentYear}-${currentMonth}-01`)
    if (currentMonth === 12) {
      setMax(`${currentYear}-01-01`)
    } else {
      const firstDayNextMonth = new Date(
        `${currentYear}-${currentMonth + 1}-01`,
      ).getDate()

      setMax(`${currentYear}-${currentMonth}-${firstDayNextMonth}`)
    }
  }, [])

  return { min, max }
}
