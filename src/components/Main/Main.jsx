import React from 'react'

function Main() {
    return (
        <div className=' mt-[10vh]'>
            <p className='flex justify-center items-center m-auto bg-[#070708] text-[#AFB0B6] text-[14px] w-[234px] h-[40px] rounded-full'>
                👋🏼Let’s Save our Environment</p>
                <p className='text-[45px] sm:text-[70px] font-[700] text-center'>Streamline Your Sustainability Reporting With <label className='text-[#28B30E]'>CARBON CRUNCH</label></p>
                <p className='text-[15px] text-center'><strong className='text-[#28B30E]'>95%</strong> Accurate Carbon Calculations Trusted by Industry Leaders</p>

                <div className='flex flex-col sm:flex-row gap-3 m-auto mt-10 w-fit h-fit'>
                    <button className='w-[200px] h-[54px] bg-[#FFFFFF] text-[#28B30E] font-bold rounded-[10px]'>Free Calculator</button>
                    <button className='w-[200px] sm:w-[159px] h-[54px] bg-[#28B30E] font-bold rounded-[10px]'>Book Demo</button>
                </div>
        </div>
    )
}

export default Main