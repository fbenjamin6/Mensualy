import { useTotal } from '../hooks/useTotal'

export function Total() {
  const { total, alreadyPaid } = useTotal()
  return (
    <div>
      <p className='font-medium '>
        Total:{' '}
        {total.toLocaleString('es-AR', {
          style: 'currency',
          currency: 'ARS',
          minimumFractionDigits: 0,
        })}
      </p>
      <p className='font-medium '>
        Pagado:{' '}
        {alreadyPaid.toLocaleString('es-AR', {
          style: 'currency',
          currency: 'ARS',
          minimumFractionDigits: 0,
        })}
      </p>
    </div>
  )
}
