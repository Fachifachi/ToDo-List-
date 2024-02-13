import { useState } from 'react'

import Header from './components/Header'
import Day from './components/Day'
import Form from './components/Form'
import ListTasks from './components/ListTasks'
import Week from './components/Week'
import Month from './components/Month'
import Year from './components/Year'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <h1 className='text-5xl'>To do List</h1>
     </main>
    </>
  )
}

export default App
