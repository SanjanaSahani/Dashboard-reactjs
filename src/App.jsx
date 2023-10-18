import { useState } from 'react'

import Sidebar from './components/sidebar'
import Header from './components/Header'
import Section from './components/Section'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className='ml-6 '>
          <Header />
          <Section />
          <Main />
          <Footer />
        </div>

      </div>
    </>
  )
}

export default App
