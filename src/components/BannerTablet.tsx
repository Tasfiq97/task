import Image from 'next/image'
import React from 'react'
import { bannerContent } from '../data/bannerData'

const BannerTablet = () => {
  return (
    <div className='hidden md:block lg:hidden'>
       
        <div className='flex justify-center mb-8'>
            <Image 
                src="/images/banner.png" 
                alt="banner" 
                width={500} 
                height={500} 
                className='w-full max-w-[500px] h-auto'
            />
        </div>
        
       
        <div className='text-left '>
            <h1 className='text-[30px] leading-[120%] font-[700] text-[#fff] pb-[8px] '>
                Want to Turn Social Media Into a Profitable Career? 
            </h1>
            <h2 className='text-[30px] leading-[120%] font-[700] text-[#00E7F9] pb-[16px] ' 
                style={{textShadow: '0px 4px 4px #FC004E'}}>
                Discover your way to success with Fametonic:
            </h2>
            
            <div className='text-[#fff] mb-8 font-figtree text-[16px] leading-[24px] font-[600]'>
                {bannerContent.map((item, index) => (
                    <div key={index} className='flex items-start gap-4 mb-5 text-left'>
                        <Image src={item.icon} alt="icon" width={24} height={24} className='mt-1 flex-shrink-0' />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
            <div className='pb-[12px]'>
                <p className='text-[#ABABAB] font-figtree text-[12px] leading-[140%] font-[500]'>
                By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy Policy, Subscription Terms
                </p>
            </div>
            
            <div>
                <p className='text-[#ABABAB] font-figtree text-[11px] leading-[100%] font-[500]'>
                Fametonic 2025 &copy;All Rights Reserved.
                </p>
            </div>
            <div className='pt-[20px] pb-[40px]'>
            <button 
                    style={{boxShadow: "2px 2px 10px 0px #00E7F9"}} 
                    className='bg-[#FC004E] text-[#fff] px-[8px] py-[16px] rounded-[10px] w-full max-w-[60%] flex items-center justify-center gap-3 font-figtree text-[20px] leading-[100%] font-[700]'
                >
                    Get Started 
                    <Image src="/images/button.svg" alt="arrow" width={11} height={11}/>
                </button>
                
                <div className='mt-4 text-left'>
                    <p className='text-[#fff] font-figtree text-[14px] leading-[18px] font-[400]'>
                        1-minute quiz for personalized Insights
                    </p>
                </div>
            </div>
            
          
        </div>
    </div>
  )
}

export default BannerTablet 