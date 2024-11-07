import { useSubsContext } from '../hooks/useSubsContext'
import { Subscription } from '../types/types'
import { CalendarIcon, DeleteIcon, EditIcon, LinkIcon } from './Icons'
import { RemainingDays } from './RemainingDays'

export function SubCard({
  sub,
  SelectSubId,
}: {
  sub: Subscription
  SelectSubId: ({ id }: { id: string }) => void
}) {
  const { subs, setSubs } = useSubsContext()
  const { id, name, url, price, date } = sub
  const imgSrc = `https://www.google.com/s2/favicons?domain=${url}&sz=48`

  function deleteSub() {
    const subIndex = subs.findIndex((sub) => sub.id === id)
    const newSubs = subs.toSpliced(subIndex, 1)
    setSubs(newSubs)
    window.localStorage.setItem('subs', JSON.stringify(newSubs))
  }

  return (
    <li className='flex max-sm:flex-col justify-between sm:w-full items-center max-sm:gap-1 px-3 py-3.5 max-sm:p-3 rounded-lg bg-neutral-900 transition-all hover:drop-shadow-[0_0px_6px_rgba(76,29,149,0.60)]  duration-300'>
      <div className='flex  items-center w-full max-sm:justify-between'>
        <div className='flex items-center max-sm:gap-2.5 gap-4 w-1/2 max-sm:w-max '>
          <img
            src={imgSrc}
            alt={`${name} favicon`}
            className='rounded-full sm:w-10'
          />
          <div className='flex flex-col  w-full'>
            <h4 className='sm:text-lg  font-medium text-ellipsis overflow-hidden whitespace-nowrap '>
              {name}
            </h4>
            <a
              href={url}
              target='_blank'
              className='text-gray-500 hover:text-gray-300 transition-colors duration-300 flex items-center max-sm:text-sm  gap-1'
            >
              Visitar sitio web <LinkIcon />
            </a>
          </div>
        </div>
        <div className='flex flex-col text-sm  justify-between'>
          <div className='flex items-center gap-1.5 text-gray-200 '>
            <CalendarIcon /> {` ${date.getDate()}/${date.getMonth() + 1}`}
          </div>
          <div className='text-gray-400 flex items-center gap-1.5 '>
            <RemainingDays date={date} />
          </div>
        </div>
      </div>
      <div className='flex items-center gap-4 font-medium  max-sm:w-full max-sm:justify-between'>
        <span className='text-gray-300 ml-[58px] max-sm:text-sm'>{price}</span>
        <div className='flex items-center max-sm:gap-2 gap-3'>
          <button
            onClick={() => SelectSubId({ id })}
            className='bg-gray-700/70 hover:bg-gray-700 transition-colors duration-200 max-sm:px-1 p-1 max-sm:p-0.5 rounded-md'
          >
            <EditIcon />
          </button>
          <button
            onClick={() => deleteSub()}
            className='bg-red-600/85 hover:bg-red-600 transition-colors duration-200 max-sm:px-1 p-1  max-sm:p-0.5 rounded-md'
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </li>
  )
}
