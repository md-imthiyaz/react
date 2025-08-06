import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (

        <div className='bg-green-300 flex justify-center items-center text-white text-base p-10 gap-7 font-semibold text-center '>
            <NavLink to='/' className=" w-[70px] h-[30px] rounded-md hover:bg-emerald-200 hover:border-white hover:text-black border-2" >Home</NavLink>
            <NavLink to='/about' className=" w-[70px] h-[30px] rounded-md hover:bg-emerald-200 hover:border-white hover:text-black border-2" >About</NavLink>
            <NavLink to='/contact' className=" w-[70px] h-[30px] rounded-md hover:bg-emerald-200 hover:border-white hover:text-black border-2" >Contact</NavLink>
            <NavLink to='/service' className=" w-[70px] h-[30px] rounded-md hover:bg-emerald-200 hover:border-white hover:text-black border-2" >Service</NavLink>
        </div>
    )
}

export default Navbar