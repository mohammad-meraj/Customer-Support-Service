import React, { useState } from 'react';
import time from '../assets/ri_calendar-line.png'
import { toast } from 'react-toastify';
const CustomerTickets = ({ticket,selectTicket,setSelectTicket,progress,setProgress}) => {
               const[status,setStatus]=useState(false)

    return (
        <div onClick={()=>{
                {
                  const alreadySelected=selectTicket.find(data=>data.id===ticket.id)
                  if(!alreadySelected){
                       setProgress(progress+1)
                setSelectTicket([...selectTicket,ticket])
                setStatus(true)
                toast("Problem is in Progress.....")
                  }
                }
              
                }}>
    
 <div className="card bg-amber-50 rounded-lg shadow-md h-45">
  <div className="card-body p-4">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold">{ticket.title}</h3>
      <button className={`${status===true? "bg-yellow-200 text-yellow-600":"bg-green-300 text-green-700"} px-3 py-1 rounded-2xl text-sm`}>
        {status===true? "In-Progress":"Open"}
      </button>
    </div>
    <p className="text-sm text-gray-800 mb-4">{ticket.description}</p>
    <div className="flex justify-between items-center text-sm text-gray-700">
      <div>
        <span className="font-semibold">ID:</span><span>{ticket.id}</span>
        <span  className={`uppercase font-semibold pl-3 ${ ticket.priority === "high" ? "text-red-500": ticket.priority === "medium" ? "text-yellow-500": "text-green-400" }`}>{ticket.priority}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-semibold">{ticket.customer}</span>
        <div className="flex items-center space-x-1">
          <img src={time} alt="time" className="w-4 h-4" />
          <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

    </div>

  </div>
</div>
        
        </div>
    );
};

export default CustomerTickets;