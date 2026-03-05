import React from 'react';

const ResolveTask = ({resolveTask}) => {
    return (
         <div className="flex flex-col gap-3">
            {
                resolveTask.map(info=> {
                    
                    return(

                     <div key={info.id} className="card bg-gradient-to-br from-[#713fe5] to-[#aa76f2] rounded-lg shadow-md">
                       <div className="card-body p-4">
                        
                         <h2 className='font-semibold text-lg text-white'>{info.title}</h2>
                     
                       </div>
                     </div>

                    )
                })
            }
        </div>
    );
};

export default ResolveTask;