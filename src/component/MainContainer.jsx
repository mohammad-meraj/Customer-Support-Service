import React, { use } from 'react';
import CustomerTickets from './CustomerTickets';
import TaskStatus from './TaskStatus';

const MainContainer = ({fetchTickets,selectTicket,setSelectTicket,progress,setProgress}) => {
    const Tickets=use(fetchTickets)
    
    return (
        <div className='max-w-11/12 mx-auto flex justify-between gap-5 mt-10'>
        {/* customer tickets div */}
    <div className='grid grid-cols-2 gap-3'>
        {/* <h2>Customer Tickets</h2> */}
        {
            Tickets.map( ticket=> <CustomerTickets progress={progress} setProgress={setProgress} selectTicket={selectTicket} setSelectTicket={setSelectTicket} key={ticket.id} ticket={ticket} ></CustomerTickets>)
        }
    </div>
         {/* Task Status */}
         <div className='flex flex-col space-y-5'>
              <div className='w-86'><h2 className='text-xl w- font-semibold'>Task Status</h2></div>
              <div>
                { 
                selectTicket.length === 0 ? <p className='text-sm text-gray-500 pl-5'>Select a ticket to add to Task Status</p> : <TaskStatus selectTicket={selectTicket}></TaskStatus>
                }
              </div>
         </div>

        </div>
    );
};

export default MainContainer;