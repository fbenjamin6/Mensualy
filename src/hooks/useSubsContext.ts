import { useContext } from 'react'
import { SubsContext } from '../context/SubsContext'

export function useSubsContext() {
  const context = useContext(SubsContext)

  if (!context) {
    throw new Error(
      'Ocurrió un error al intentar consumir la información del SubsContext',
    )
  }

  return context
}
