import { useEffect, useRef } from 'react'
import { CloseIcon, ConfirmIcon, PlusIcon } from './Icons'
import { useForm } from '../hooks/useForm'
import { useDate } from '../hooks/useDate'

export function Modal({
  toggleModal,
  subId,
  isOpen,
}: {
  toggleModal: () => void
  subId: string
  isOpen: boolean
}) {
  const overlay = useRef<HTMLDivElement | null>(null)
  const { name, url, price, handleInput, date, addSub, editSub, resetForm } =
    useForm({
      subId,
    })
  const { min, max } = useDate()

  useEffect(() => {
    if (!subId) resetForm()
  }, [isOpen])

  function handleOverlay(e: any) {
    if (e.target === overlay.current) toggleModal()
  }

  return (
    <div
      onClick={handleOverlay}
      ref={overlay}
      className={`flex items-center justify-center fixed z-50 bg-neutral-700/30 w-full h-full top-0 right-0 transition-opacity ease-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <section className='flex relative bg-neutral-900 sm:py-12 sm:px-16 px-10 py-8 rounded-lg'>
        <button
          onClick={() => toggleModal()}
          className='absolute top-4 right-4 hover:scale-110 transition-transform'
        >
          <CloseIcon />
        </button>
        <form
          onSubmit={(event) => {
            toggleModal()
            if (subId) return editSub({ event })
            addSub(event)
          }}
          className='flex flex-col gap-5'
        >
          <div>
            <label htmlFor='name' className='block mb-0.5 font-medium'>
              Nombre
            </label>
            <input
              onChange={(event) => handleInput({ input: 'name', event })}
              name='name'
              type='text'
              placeholder='Nombre de suscripción'
              required
              className='w-64 sm:w-80 p-1 rounded-md bg-neutral-950/40 outline-none border-2 duration-300 border-neutral-800/50 hover:border-neutral-800 transition-colors focus:border-violet-800/60 focus-within:bg-black'
              value={name}
            />
          </div>
          <div>
            <label htmlFor='url' className='block mb-0.5 font-medium'>
              Dirección URL
            </label>
            <input
              onChange={(event) => handleInput({ input: 'url', event })}
              name='url'
              type='url'
              placeholder='https://www.example.com/'
              pattern='https://.*'
              required
              className='w-64 sm:w-80 p-1 rounded-md bg-neutral-950/40 outline-none border-2 duration-300 border-neutral-800/50 hover:border-neutral-800 transition-colors focus:border-violet-800/60 focus-within:bg-black'
              value={url}
            />
          </div>
          <div>
            <label htmlFor='price' className='block mb-0.5 font-medium'>
              Precio
            </label>
            <input
              onChange={(event) => handleInput({ input: 'price', event })}
              name='price'
              type='text'
              required
              className='w-64 sm:w-80 p-1 rounded-md bg-neutral-950/40 outline-none border-2 duration-300 border-neutral-800/50 hover:border-neutral-800 transition-colors focus:border-violet-800/60 focus-within:bg-black'
              value={price}
              placeholder='$0'
            />
          </div>
          <div>
            <label htmlFor='date' className='block mb-0.5 font-medium'>
              Fecha de pago
            </label>
            <input
              onChange={(event) => handleInput({ input: 'date', event })}
              name='date'
              type='date'
              min={min}
              max={max}
              required
              className='w-64 sm:w-80 p-1 rounded-md bg-neutral-950/40 outline-none border-2 duration-300 border-neutral-800/50 hover:border-neutral-800 transition-colors focus:border-violet-800/60 focus-within:border-violet-800/60 focus-within:bg-black'
              value={date}
            />
          </div>
          <button
            type='submit'
            className='ml-auto transition-colors duration-300 text-gray-300 hover:text-white hover:bg-violet-800 bg-violet-900 rounded-full py-1 px-4 font-medium flex gap-1 items-center '
          >
            <span>{subId ? 'Confirmar' : 'Agregar'}</span>{' '}
            {subId ? <ConfirmIcon width={'24px'} /> : <PlusIcon />}
          </button>
        </form>
      </section>
    </div>
  )
}
