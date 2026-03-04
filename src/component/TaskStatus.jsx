import React from 'react';
import time from '../assets/ri_calendar-line.png'

const TaskStatus = ({selectTicket}) => {
    return (
        <div className="flex flex-col gap-3">
            {
                selectTicket.map(info=> {
                    return(

                     <div className="card bg-amber-50 rounded-lg shadow-md w-86">
                       <div className="card-body p-4">
                        
                         <h2 className='font-semibold text-lg'>{info.title}</h2>
                         <button className='btn bg-green-400 text-white font-medium'>Completed</button>
                     
                       </div>
                     </div>

                    )
                })
            }
        </div>
    );
};

export default TaskStatus;