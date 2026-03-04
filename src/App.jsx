
import { Suspense, useState } from 'react'
import './App.css'
import CountingBox from './component/CountingBox'
import Navber from './component/Navber'
import MainContainer from './component/MainContainer'

const fetchTickets=fetch('/TicketsData.json').then(res=> res.json())

function App() {
    const[progress,setProgress]= useState(0)
     const [selectTicket,setSelectTicket]= useState([])
   
  return (
    <>
      <Navber></Navber>
      <CountingBox progress={progress}></CountingBox>
      <Suspense fallback={<h2>Tickeys loading</h2>}>
        <MainContainer progress={progress} setProgress={setProgress} selectTicket={selectTicket} setSelectTicket={setSelectTicket} fetchTickets={fetchTickets}></MainContainer>
      </Suspense>
      
    </>
  )
}

export default App
