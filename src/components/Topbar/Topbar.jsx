import React, { useState, useEffect } from 'react'

function ControlBurgerOption(burgerOption, setBurgerOption) {
  if (burgerOption === false) {
    setBurgerOption(true);
  } else {
    setBurgerOption(false);
  }
}

function Topbar() {
  const [size, setSize] = useState(window.innerWidth);
  const [burgerOption, setBurgerOption] = useState(false);

  window.addEventListener("resize", () => {
    setSize(window.innerWidth)
  })

  useEffect(() => {
    if(size>1024){
    setBurgerOption(true);
    }else{
      setBurgerOption(false)
    }
  }, [size > 1024])

  return (
    <div className={`flex relative justify-between lg:items-center items-start`}>
      {/* Logo */}
      <div className='flex w-fit h-fit justify-center items-center font-[700] gap-1'>
        <img src="./company logo.png" alt="Company Logo" />
        <p className='text-[21px]'>Carboncrunch</p>
      </div>

      {/* Burger Options */}
      {size <= 1024 &&
        <div className='fixed flex justify-end z-50 top-10 right-5'>
          <button
            className='flex flex-col gap-1 w-fit h-fit'
            onClick={() => ControlBurgerOption(burgerOption, setBurgerOption)}>
            <div className='w-[30px] h-[3px] bg-black' />
            <div className='w-[30px] h-[3px] bg-black' />
            <div className='w-[30px] h-[3px] bg-black' />
          </button>
        </div>
      }
      {/* Buttons and navigation links */}
      {(burgerOption === true || size>1024) &&
        <div className={`flex absolute right-0 lg:relative flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-x-32 gap-y-10 w-fit bg-[#FFFFFF] lg:bg-transparent p-5 lg:p-0 pt-10`}>

          {/* Navigation links */}
          <div className={`flex flex-col lg:flex-row gap-5 lg:bg-[#FFFFFF] w-fit lg:h-[53px] lg:px-5 rounded-[10px] m-auto lg:m-0 `}>
            <button className='text-[16px] hover:underline hover:scale-105'>Home</button>
            <button className='text-[16px] hover:underline hover:scale-105'>Services</button>
            <button className='text-[16px] hover:underline hover:scale-105'>Blogs</button>
            <button className='text-[16px] hover:underline hover:scale-105'>About Us</button>
            <button className='text-[16px] hover:underline hover:scale-105'>Contact</button>
          </div>

          {/* buttons */}
          <div className='flex flex-col lg:flex-row gap-3'>
            <button className='text-[16px] font-semibold bg-[#D6FFD0] text-[#28B30E] w-[134px] h-[41px] rounded-[10px] hover:scale-105'>Login</button>
            <button className='text-[16px] font-semibold bg-[#28B30E] w-[134px] h-[41px] rounded-[10px] hover:scale-105'>Book Demo</button>
          </div>
        </div>
      }

    </div>
  )
}

export default Topbar