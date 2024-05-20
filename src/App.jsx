import { useState } from 'react'
import './App.css'
import InputSection from './components/InputSection'
import MainSection from './components/MainSection'
import ForecastSection from './components/ForecastSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-auto max-w-screen-lg my-4 py-5 px-4 md:px-32 bg-gradient-to-br shadow-xl shadow-slate-500 from-cyan-600 to-blue-700'>
      <InputSection />
      <MainSection />
      <ForecastSection />
      <ForecastSection />
      <ForecastSection />
    </div>
  )
}

export default App
