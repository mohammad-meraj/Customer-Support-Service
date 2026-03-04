import React from 'react';
import time from '../assets/ri_calendar-line.png'
const CustomerTickets = ({ticket,selectTicket,setSelectTicket,progress,setProgress}) => {
    return (
        <div onClick={()=>{
               setProgress(progress+1)
                setSelectTicket([...selectTicket,ticket])
                }}>
    
 <div className="card bg-amber-50 rounded-lg shadow-md h-45">
  <div className="card-body p-4">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold">{ticket.title}</h3>
      <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm uppercase">
        {ticket.status}
      </button>
    </div>
    <p className="text-sm text-gray-800 mb-4">{ticket.description}</p>
    <div className="flex justify-between items-center text-sm text-gray-700">
      <div>
        <span className="font-semibold">ID:</span><span>{ticket.id}</span>
        <span className='text-red-500'>  P:{ticket.priority}</span>
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