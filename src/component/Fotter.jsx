import React from 'react';
import { FaSquareXTwitter,FaSquareEnvelope } from "react-icons/fa6";
import { FaLinkedin,FaFacebookSquare  } from "react-icons/fa";

const Fotter = () => {
    return (
        <div className='bg-black text-white pt-15 mt-14'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-4 max-w-11/12 mx-auto border-b border-b-gray-600 pb-10'>

                 <div className='flex gap-3 flex-col justify-between items-start flex-3' >
                    <h2 className='text-xl font-semibold'>CS — Ticket System</h2>
                    <p className='text-md text-gray-500'>Our organizations manage customer requests efficiently and transparently. Our platform allows users to create, track, and resolve support tickets in an organized way, ensuring no issue is overlooked. With clear prioritization, real-time updates, and a structured workflow, teams can respond faster and improve customer satisfaction.</p>
                 </div>

                 <div className='flex gap-3 flex-col justify-between items-start flex-1 text-sm text-gray-500'>
                    <h3 className='text-xl font-semibold text-white'>Company</h3>
                    <a>About Us</a>
                    <a>Our Mission</a>
                    <a>Contact Saled</a>
                 </div>
                     
                 <div className='flex gap-3 flex-col justify-between items-start flex-1 text-sm text-gray-500'>
                      <h3 className='text-xl font-semibold text-white'>Services</h3>
                    <a>Products & Services</a>
                    <a>Customer Stories</a>
                    <a>Download Apps</a>
                 </div>

                 <div className='flex gap-3 flex-col justify-between items-start flex-1 text-sm text-gray-500'>
                    <h3 className='text-xl font-semibold text-white'>Information</h3>
                    <a>Privacy Policy</a>
                    <a>Terms & Conditions</a>
                    <a>Join Us</a>
                 </div>

                 <div className='flex gap-3 flex-col justify-between items-start flex-1 text-sm text-gray-500'>
                    <h3 className='text-xl font-semibold text-white'>Social Links</h3>
                    <a className='flex items-center flex-row gap-1'><FaSquareXTwitter className='text-white' /> @CS — Ticket System</a>
                    <a className='flex items-center flex-row gap-1'><FaLinkedin className='text-white' />@CS — Ticket System</a>
                    <a className='flex items-center flex-row gap-1'><FaFacebookSquare className='text-white' />@CS — Ticket System</a>
                    <a className='flex items-center flex-row gap-1'><FaSquareEnvelope className='text-white' />support@cst.com</a>
                 </div>

            </div>
            <div className='items-center'>
                <h2 className='text-center py-7'>© 2025 CS — Ticket System. All rights reserved.</h2>
            </div>
            
        </div>
    );
};

export default Fotter;