'use client'
import React from 'react'
import BannerMobile from './BannerMobile'
import BannerTablet from './BannerTablet'
import BannerDesktop from './BannerDesktop'

const Banner = () => {
  return (
    <div className='relative w-full font-urbanist pt-[20px]'>
        <div className='flex justify-center items-center w-full'>
            <div className='relative w-full max-w-6xl'>
                <BannerMobile />
                <BannerTablet />
                <BannerDesktop />
            </div>
        </div>
    </div>
  )
}

export default Banner