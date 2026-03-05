import React from 'react';

const Navber = () => {
    return (
        <div>
            
         <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start lg:pl-10">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
        <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Downlode</a></li>
      <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="text-lg lg:text-xl font-semibold">CS — Ticket System</a>
  </div>
  <div className="navbar-end flex gap-5">
     <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
      <li className='hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-sm'><a>Home</a></li>
      <li className='hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-sm'><a>FAQ</a></li>
      <li className='hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-sm'><a>Changelog</a></li>
      <li className='hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-sm'><a>Blog</a></li>
      <li className='hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-sm'><a>Downlode</a></li>
      <li className='hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-sm'><a>Contact</a></li>
       </ul>
     </div>
    <a className="btn lg:mr-15 text-white font-medium bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"> + New Ticket</a>
  </div>
         </div>

        </div>
    );
};

export default Navber;