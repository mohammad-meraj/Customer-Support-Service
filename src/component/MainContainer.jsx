import React, { use, useState } from 'react';
import CustomerTickets from './CustomerTickets';
import TaskStatus from './TaskStatus';
import ResolveTask from './ResolveTask';

const MainContainer = ({fetchTickets,selectTicket,setSelectTicket,progress,setProgress,Resolve,setResolve}) => {
    const Tickets=use(fetchTickets)
    const [customerProb,setCustomerProb]= useState(Tickets)
    const[resolveTask,setResolveTask]=useState([])
    
    return (
        
        <div className='max-w-11/12 mx-auto flex flex-col lg:flex-row justify-between gap-5 mt-10'>
              <div>
                  <div>
                    <h2 className='text-xl w- font-semibold mb-4'>Customer Tickets</h2>
                </div>
        {/* customer tickets div */}
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
        {/* <h2>Customer Tickets</h2> */}
        {
            customerProb.map( ticket=> <CustomerTickets progress={progress} setProgress={setProgress} selectTicket={selectTicket} setSelectTicket={setSelectTicket} key={ticket.id} ticket={ticket} ></CustomerTickets>)
        }
    </div>
              </div>
         {/* Task Status */}
         <div className='flex flex-col space-y-5'>
              <div className='w-86'><h2 className='text-xl w- font-semibold'>Task Status</h2></div>
              <div>
                { 
                selectTicket.length === 0 ? <p className='text-sm text-gray-500 pl-5'>Select a ticket to add to Task Status</p> : <TaskStatus Tickets={Tickets} setResolveTask={setResolveTask} resolveTask={resolveTask} setResolve={setResolve} Resolve={Resolve} progress={progress} setProgress={setProgress} customerProb={customerProb} setCustomerProb={setCustomerProb} selectTicket={selectTicket} setSelectTicket={setSelectTicket}></TaskStatus>
                }
              </div>
              <div className='w-86'><h2 className='text-xl w- font-semibold mt-5'>Resolved Task</h2></div>
              <div>
                   {
                    resolveTask.length ===0?<p className='text-sm text-gray-500 pl-5'>No resolves tasks yet</p>: <ResolveTask resolveTask={resolveTask}></ResolveTask>  
                   }
              </div>
         </div>
        </div>
    );
};

export default MainContainer;