// import React from 'react';

// const CountingBox = () => {
//     return (
//         <div className='relative flex flex-col lg:flex-row justify-between gap-5 items-center max-w-12/14 mx-auto'>
//             <img className="absolute top-0 left-0 z-10" src="./assets/vector1.png" alt="" />
//             <div className=' text-white font-medium bg-gradient-to-br from-[#2e3de3] to-[#9F62F2] w-4/5 text-center px-28 py-20'>
//               <h2>hello</h2>
//             </div>
//             <div className='border-1 w-4/5 text-center  px-28 py-20 '>
//                 <h2>world</h2>
//             </div>
//         </div>
//     );
// };

// export default CountingBox;
import React from 'react';
import vectorImg1 from '../assets/vector1.png';
import vectorImg2 from '../assets/vector2.png';

const CountingBox = ({progress}) => {
    return (
        <div className='flex flex-col lg:flex-row justify-between gap-5 items-center max-w-[85%] mx-auto pt-20'>
           

            <div className='relative text-white font-medium bg-gradient-to-br from-[#632EE3] to-[#9F62F2] w-4/5 text-center px-28 py-15 rounded-lg'>
             <img className="absolute left-0 top-1/2 -translate-y-1/2 z-10" src={vectorImg1} alt=""/>
             <img className="absolute right-0 top-1/2 -translate-y-1/2 z-10" src={vectorImg2} alt=""/>
                <h2 className='text-2xl font-semibold mb-3'>In-Progress</h2>
                <h2 className='text-4xl font-bold'>{progress}</h2>
            </div>

            <div className='relative text-white font-medium bg-gradient-to-br from-[#54CF68] to-[#00827A] w-4/5 text-center px-28 py-15 rounded-lg'>
            <img className="absolute left-0 top-1/2 -translate-y-1/2 z-10" src={vectorImg1} alt=""/>
             <img className="absolute right-0 top-1/2 -translate-y-1/2 z-10" src={vectorImg2} alt=""/>
                <h2 className='text-2xl font-semibold mb-3'>Resolved</h2>
                <h2 className='text-4xl font-bold'>0</h2>
            </div>

        </div>
    );
};

export default CountingBox;