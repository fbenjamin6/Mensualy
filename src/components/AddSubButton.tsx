import { PlusIcon } from './Icons'

export function AddSubButton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button
        onClick={onClick}
        className={
          'ml-auto flex gap-1.5 items-center transition-colors duration-300 text-gray-300 hover:text-white hover:bg-violet-800 bg-violet-900 max-w-max px-4 py-2 rounded-full font-medium'
        }
      >
        Agregar suscripción <PlusIcon />
      </button>
    </>
  )
}
