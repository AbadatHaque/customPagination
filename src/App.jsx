import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagination from './customPlugin/pagination'

function App() {
  const [count, setCount] = useState(0)
  const onChangePage=(pageVal, numberOfRecord)=>{
    console.log(pageVal,numberOfRecord)
  }

  return (
    <>
   <Pagination count={100} numberOfRecord={10} lostOfRecord={[5,10,15]} onChangePage={onChangePage}/>
    </>
  )
}

export default App
