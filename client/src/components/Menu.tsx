import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router'

function Menu() {

  const [menuButton, setMB]=useState('100%')

  const orientation = screen.orientation.type

  return <div className='w-full h-screen bg-beige'>
    {
      orientation.match(/landscape/gi)==null?(
        <div className='w-full h-full flex flex-col'>
          {/* header */}
          <div className='w-full h-fit bg-sage flex justify-between items-center p-2 text-brown'>
            <div className='font-bold p-2'>login</div>
            <div className='aspect-square border-2 border-brown w-[12.5%] grid grid-cols-1 gap-0.5 p-0.5' onClick={()=>{setMB('0')}}>
              <div className='w-full h-full bg-brown '/>
              <div className='w-full h-full bg-brown '/>
              <div className='w-full h-full bg-brown '/>
            </div>
          </div>

          {/* menu */}
          <div className='absolute w-full h-screen bg-sage transition-all duration-200 grid grid-cols-1 grid-rows-1 p-4 content-center' style={{bottom:menuButton}}>
            <div className='bg-beige h-full w-full border-4 border-brown flex flex-col p-2'>
              <div className='w-full h-fit p-2 border border-brown flex'><img src='' className='w-[33.3%] aspect-square'/><div className='w-[66.7%] grid content-center justify-items-center '><div>Name</div></div></div>
              <div className='w-full h-full p-2 mt-2 border border-brown grid grid-cols-1 gap-2 items-center'>
                <div className='w-full h-full border border-brown'>Net worth - pay taxes</div>
                <div className='w-full h-full border border-brown'>Cash in bank - loans</div>
                <div className='w-full h-full border border-brown'>Locked</div>
              </div>
            </div>
            <div className='absolute bottom-0 bg-brown right-0 p-2 text-beige font-semibold text-xs'>by SheetSpeak</div>
            <div className='absolute m-2 top-0 bg-beige right-0 w-[12.5%] aspect-square border-2 border-brown grid-cols-1 grid-rows-1 grid content-center justify-items-center overflow-hidden' onClick={()=>{setMB("100%")}}>
              <div className='w-full h-full border-beige border-2 z-1'/>
              <div className='bg-brown h-[200%] origin-top-left translate-x-[-300%] translate-y-[-25%] absolute w-[33%] skew-45'/>
              <div className='bg-brown h-[200%] origin-top-right translate-x-[300%] translate-y-[-23.25%] absolute w-[33%] skew-135'/>
            </div>
          </div>

          {/* body */}
          <div className='w-full h-full grid grid-cols-1 gap-4 p-4'>
              <div className='bg-sage content-center text-center font-black text-2xl text-beige'>HOUSE</div>
              <Link to={"/stocks"}><div className='bg-[#285A48] content-center text-center font-black text-2xl text-[#B0E4CC] h-full w-full'>STOCKS</div></Link>
              <div className='bg-maroon content-center text-center font-black text-2xl text-beige'>GAMBLE</div>
          </div>

        </div>
      ):(
        <div className=''>Hehhe</div>
  )
    }

  </div>
}

export default Menu
