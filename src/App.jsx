
import { Suspense, useState } from 'react'
import './App.css'
import CountingBox from './component/CountingBox'
import Navber from './component/Navber'
import MainContainer from './component/MainContainer'
import Fotter from './component/Fotter'

const fetchTickets=fetch('/TicketsData.json').then(res=> res.json())

function App() {
    const[progress,setProgress]= useState(0)
    const[Resolve,setResolve]= useState(0)
     const [selectTicket,setSelectTicket]= useState([])
     
   
  return (
    <>
      <Navber></Navber>
      <CountingBox Resolve={Resolve} progress={progress}></CountingBox>
      <Suspense fallback={<h2>Tickeys loading</h2>}>
        <MainContainer setResolve={setResolve} Resolve={Resolve} progress={progress} setProgress={setProgress} selectTicket={selectTicket} setSelectTicket={setSelectTicket} fetchTickets={fetchTickets}></MainContainer>
      </Suspense>
      <Fotter></Fotter>
      
    </>
  )
}

export default App
