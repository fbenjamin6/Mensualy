import { createPortal } from 'react-dom'
import { AddSubButton } from './AddSubButton'
import { useSubsContext } from '../hooks/useSubsContext'
import { SubCard } from './SubCard'
import { useModal } from '../hooks/useModal'
import { Modal } from './Modal'
import { Subscription } from '../types/types'
import { useEffect } from 'react'
import { DateWithoutTimeZone } from '../utils/DateWithoutTimeZone'
import { Total } from './Total'
import { SortSelector } from './SortSelector'

export function Wrapper({}) {
  const { subs, setSubs } = useSubsContext()
  const { isOpen, toggleModal, subId, SelectSubId } = useModal()

  useEffect(() => {
    const subsUpdated = subs.map((sub: Subscription) => {
      const date = DateWithoutTimeZone(new Date(sub.date))
      const dateMonth = date.getMonth()
      const today = DateWithoutTimeZone(new Date(Date.now()))
      const currentMonth = today.getMonth()

      if (dateMonth !== currentMonth) {
        date.setMonth(currentMonth)
      }

      return { ...sub, date }
    })
    setSubs(subsUpdated)
    window.localStorage.setItem('subs', JSON.stringify(subsUpdated))
  }, [])

  return (
    <section className='flex w-full flex-col gap-4 mt-12 '>
      <div className='flex justify-between items-end'>
        <Total />
        <SortSelector />
      </div>
      <ul className='flex flex-col gap-3 '>
        {subs.map((sub: Subscription) => {
          return <SubCard key={sub.id} sub={sub} SelectSubId={SelectSubId} />
        })}
      </ul>

      <AddSubButton onClick={() => toggleModal()} />

      {createPortal(
        <Modal toggleModal={toggleModal} isOpen={isOpen} subId={subId} />,
        document.body,
      )}
    </section>
  )
}
