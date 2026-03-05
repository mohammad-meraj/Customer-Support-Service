import React from 'react';
import { toast } from 'react-toastify';

const TaskStatus = ({selectTicket,setSelectTicket,progress,setProgress,customerProb,setCustomerProb,Resolve,setResolve,resolveTask,setResolveTask}) => {
    return (
        <div className="flex flex-col gap-3">
            {
                selectTicket.map(info=> {
                    return(

                     <div key={info.id} className="card bg-amber-50 rounded-lg shadow-md">
                       <div className="card-body p-4">
                        
                         <h2 className='font-semibold text-lg'>{info.title}</h2>
                         <button onClick={()=>{
                            setResolve(Resolve+1)
                            setProgress(progress-1)
                            setSelectTicket(selectTicket.filter(data=> data.id!==info.id))
                            setCustomerProb(customerProb.filter(data=> data.id!==info.id))
                            setResolveTask([...resolveTask, info])
                            toast("Problem is Resolved")
                         }} className='btn bg-green-400 text-white font-medium'>Completed</button>
                     
                       </div>
                     </div>

                    )
                })
            }
        </div>
    );
};

export default TaskStatus;