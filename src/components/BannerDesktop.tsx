import Image from 'next/image'
import React from 'react'
import { bannerContent } from '../data/bannerData'

const BannerDesktop = () => {
  return (
    <div className='hidden lg:block '>
        <div className='flex justify-end'>
            <Image src="/images/banner.png" alt="banner" width={666} height={679} />
        </div>
        
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-start'>
            <div className='text-left ml-[16px]'>
                <h1 className='text-[35px] leading-[100%] font-[700] text-[#fff] w-[80%]'>
                    Want to Turn Social Media Into a Profitable Career? 
                </h1>
                <h2 className='text-[35px] leading-[100%] font-[700] text-[#00E7F9] pt-[10px] w-[60%]' 
                    style={{textShadow: '0px 4px 4px #FC004E'}}>
                    Discover your way to success with Fametonic:
                </h2>
                <div className='text-[#fff] py-[16px] font-figtree text-[16px] leading-[22px] font-[600] w-[60%]'>
                    {bannerContent.map((item, index) => (
                        <div key={index} className='flex items-center gap-3 mb-3'>
                            <Image src={item.icon} alt="icon" width={22} height={22} />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <button 
                        style={{boxShadow: "2px 2px 10px 0px #00E7F9"}} 
                        className='bg-[#FC004E] text-[#fff] px-[16px] py-[10px] rounded-[5px] w-[40%] flex items-center justify-center gap-5 font-figtree text-[20px] leading-[100%] font-[700]'
                    >
                        Get Started 
                        <Image src="/images/button.svg" alt="arrow" width={10} height={10}/>
                    </button>
                    <div className='text-center w-[40%]'>
                        <p className='text-[#fff] py-[16px] px-[8px] font-figtree text-[12px] leading-[16px] font-[400]'>
                            1-minute quiz for personalized Insights
                        </p>
                    </div>
                </div>
                <div className='pt-[12px] w-[60%]'>
                    <p className='text-[#ABABAB]  font-figtree text-[12px] leading-[120%] font-[500]'>
                        By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
                    </p>
                </div>
                <div>
                    <p className='text-[#ABABAB]  pt-[10px] font-figtree text-[10px] leading-[100%] font-[500]'>
                        Fametonic 2025 ©All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BannerDesktop 