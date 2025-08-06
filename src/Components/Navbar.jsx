import React from 'react'
import logo from '../Components/Assets/Call_Icon.png'

const Navbar = () => {
    return (
        <div class="bg-white shadow-md px-8 py-4 flex items-center justify-between">
  <img src={logo} class="w-2"></img> <h1 class="text-2xl font-bold text-blue-700">CONTACTAPP</h1>
</div>
    )
}

export default Navbar
