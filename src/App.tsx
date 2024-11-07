import { Wrapper } from './components/Wrapper'
import { Title } from './components/Title'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <main className='max-w-[700px] m-auto w-full max-md:px-4'>
        <Title />
        <Wrapper />
      </main>
      <Footer />
    </>
  )
}

export default App
