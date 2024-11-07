import { DateWithoutTimeZone } from '../utils/DateWithoutTimeZone'
import { ClockIcon, ConfirmIcon } from './Icons'

export function RemainingDays({ date }: { date: Date }) {
  const today = DateWithoutTimeZone(new Date(Date.now()))

  const remainingDays = date.getDate() - today.getDate()

  if (remainingDays > 0) {
    return (
      <>
        <ClockIcon /> <span>{remainingDays} días</span>
      </>
    )
  }
  if (remainingDays === 1) {
    return (
      <>
        <ClockIcon /> <span>{remainingDays} día</span>
      </>
    )
  }

  return (
    <>
      <ConfirmIcon width={'w-5'} /> <span>Pagado</span>
    </>
  )
}
