import { useEffect, useState } from 'react'
import { useSubsContext } from './useSubsContext'
import { Subscription } from '../types/types'
import { DateWithoutTimeZone } from '../utils/DateWithoutTimeZone'

export function useForm({ subId }: { subId: string }) {
  const { subs, setSubs } = useSubsContext()
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [price, setPrice] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    if (subId.length === 0) return
    const selectedSub = subs.find((sub) => sub.id === subId)
    if (selectedSub) {
      const formatDate = selectedSub?.date.toISOString().split('T')
      setName(selectedSub.name)
      setUrl(selectedSub.url)
      setPrice(selectedSub.price as string)
      setDate(formatDate[0])
    }
  }, [subId])

  function handleInput({ input, event }: { input: string; event: any }) {
    switch (input) {
      case 'name':
        setName(event.target.value)
        break
      case 'url':
        setUrl(event.target.value)
        break
      case 'date':
        setDate(event.target.value)
        console.log(event.target.value)
        break
      case 'price':
        const value = event.target.value.replace(/\D/g, '')
        if (value) {
          const newPrice = formatPrice(value)
          setPrice(newPrice)
        }
    }
  }

  function addSub(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const id = crypto.randomUUID()
    const formattedPrice = formatPrice(price)
    const stringToDate = DateWithoutTimeZone(new Date(date))
    const newSubsArray = [
      ...subs,
      { id, name, url, price: formattedPrice, date: stringToDate },
    ]
    setSubs(newSubsArray)
    window.localStorage.setItem('subs', JSON.stringify(newSubsArray))
  }

  function editSub({ event }: { event: React.FormEvent<HTMLFormElement> }) {
    event.preventDefault()
    const formattedPrice = formatPrice(price)
    const stringToDate = DateWithoutTimeZone(new Date(date))
    const newSub: Subscription = {
      id: subId,
      name,
      url,
      price: formattedPrice,
      date: stringToDate,
    }

    const newSubsArray = subs.map((sub) => {
      if (sub.id !== subId) return sub
      return newSub
    })
    setSubs(newSubsArray)
    window.localStorage.setItem('subs', JSON.stringify(newSubsArray))
  }

  function resetForm() {
    setName('')
    setUrl('')
    setPrice('')
    setDate('')
  }

  function formatPrice(price: string) {
    const newPrice = price.replace(/\D/g, '')
    const numberPrice = Number(newPrice)
    const formattedValue = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(numberPrice)
    return formattedValue
  }

  return {
    name,
    url,
    price,
    date,
    handleInput,
    addSub,
    editSub,
    resetForm,
  }
}
