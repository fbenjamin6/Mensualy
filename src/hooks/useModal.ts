import { useState } from 'react'

export function useModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [subId, setSubId] = useState('')

  function SelectSubId({ id }: { id: string }) {
    setSubId(id)
    toggleModal()
  }

  function toggleModal() {
    if (subId.length !== 0 && isOpen) setSubId('')
    setIsOpen(!isOpen)
  }

  return { isOpen, toggleModal, subId, SelectSubId }
}
