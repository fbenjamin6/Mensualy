import { SortIcon } from './Icons'
import { useSort } from '../hooks/useSort'

export function SortSelector() {
  const { handleSort, toggleOpen, isOpen } = useSort()

  return (
    <div className='relative z-30'>
      <button
        onClick={toggleOpen}
        className={` relative flex items-center gap-2 transition-all duration-300  py-1 px-3 z-50 font-medium ${
          isOpen
            ? 'bg-neutral-800 rounded-t-md'
            : 'bg-neutral-900 hover:bg-neutral-800/60 rounded-md'
        }`}
      >
        Ordenar por <SortIcon />
      </button>
      <ul
        className={`absolute bg-neutral-800 w-full flex flex-col py-1 transition-all duration-300 rounded-b-md ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <li
          onClick={handleSort}
          aria-label='name'
          className=' cursor-pointer hover:bg-neutral-900/40 py-1 px-3'
        >
          Nombre
        </li>
        <li
          onClick={handleSort}
          aria-label='price'
          className=' cursor-pointer hover:bg-neutral-900/40 py-1 px-3'
        >
          Precio
        </li>
        <li
          onClick={handleSort}
          aria-label='date'
          className=' cursor-pointer hover:bg-neutral-900/40 py-1 px-3'
        >
          Fecha
        </li>
      </ul>
    </div>
  )
}
