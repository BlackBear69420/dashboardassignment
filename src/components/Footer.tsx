import React from 'react'
import Logo from '../assets/logo-tm.3d4fcbe1.png';
import First from "../assets/zerodha.svg";

function Footer() {
  return (
    <div className='py-5 px-[5%] bg-[#f6f6f9]'>
<div className='flex items-center '>
  <p className='text-xs text-slate-400'>&copy; Powered by</p>
  <img className="h-5 w-18 ml-1 " src={Logo} alt="Logo 1" />
</div>
<img className="h-4 mr-2 mt-8" src={First} alt="Graph" />
<p className='text-slate-400 text-xs mb-12'>NSE &BSE-SEBI Registration No: INZO00031633 CDSL SEBI Registration No: IN-DP-431-2019</p>
    </div>


  )
}

export default Footer