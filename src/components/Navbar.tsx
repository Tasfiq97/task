import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-full pt-[10px] md:pt-[30px] lg:pt-[30px]">
        <div className="flex justify-between items-center w-full max-w-6xl px-4">
            
            {/* Desktop logo - left side */}
            <div className="hidden md:block">
                <Image src="/images/logo.png" alt="logo" width={170} height={80} />
            </div>
            
            {/* Mobile layout */}
            <div className="md:hidden flex justify-between items-center w-full">
                {/* Empty div for spacing on left */}
                <div className="md:hidden w-6"></div>
                
                {/* Mobile logo - centered */}
                <div className="md:hidden">
                    <Image src="/images/logo.png" alt="logo" width={105} height={44} />
                </div>
                
                {/* Mobile menu icon - right side */}
                <div className="md:hidden">
                    <Image src="/images/hamburger.png" alt="menu" width={24} height={24} />
                </div>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center">
                <ul className="flex font-figtree gap-10 font-semibold text-[18px] text-[#A9A9A9]">
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar