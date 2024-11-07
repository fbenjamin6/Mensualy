import { LinkedinIcon, GitHubIcon } from './Icons'

export function Footer() {
  return (
    <footer className='pt-12 pb-6 max-md:px-4 bg-gradient-to-t from-violet-800/15 via-transparent to-transparent  '>
      <div className='max-w-[700px] m-auto flex w-full flex-col h-full items-start justify-end gap-4 md:gap-5 '>
        <ul className='flex gap-4'>
          <li>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/federicobenjamin/'
              className='hover:text-violet-600'
            >
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://github.com/fbenjamin6'
              className='hover:text-violet-600'
            >
              <GitHubIcon />
            </a>
          </li>
        </ul>
        <span className='text-gray-400 max-sm:text-sm'>
          Hecho con 💜. 2024 Federico Benjamín
        </span>
      </div>
    </footer>
  )
}
