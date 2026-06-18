import { Link } from "react-router"

const Stocks = ()=>{

    const orientation = screen.orientation.type

    return <div className='w-full h-screen bg-[#091413]'>
    {
      orientation.match(/landscape/gi)==null?(
        <div className='w-full h-full flex flex-col'>
            {/* header */}
            <div className='w-full h-fit bg-[#285A48] flex justify-between items-center p-2 text-[#B0E4CC]'>
                <div className='font-black p-2'>STOCKS</div>
                <Link to={"/"} className="aspect-square w-[12.5%]"><div className='w-full h-full grid grid-cols-1 p-0.5'>
                    <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] skew-135"/></div>
                    <div className='w-full h-full overflow-hidden bg-[#B0E4CC]'><div className="w-full h-[200%] bg-[#285A48] skew-45"/></div>
                </div></Link>
            </div>

            {/* body */}

            {/* 
                                    <div className="aspect-square h-full text-center grid grid-cols-2 grid-rows-1 content-center text-2xl font-bold p-2">
                                        <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] -skew-150 origin-top-right"/></div>
                                        <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] -skew-30 origin-top-left"/></div>
                                    </div> */}

            <div className="w-full h-full grid p-2">
                <div className="border border-[#285A48] grid grid-cols-1 auto-rows-[20%] overflow-y-scroll p-1 gap-1 relative">

                    <div className="absolute w-full h-full bg-[#091413] z-1 p-2 flex flex-col">
                        <div className="w-full h-fit flex">
                            <img src="" className="w-[60%] aspect-square"/>
                            <div className="w-full h-full text-red-50 ml-2 grid grid-cols-2 grid-rows-2 justify-items-center">
                                <div className="w-full h-full text-center grid content-center text-2xl font-bold">BRN</div>
                                <div className="aspect-square h-full text-center grid grid-cols-2 grid-rows-1 content-center text-2xl font-bold p-4">
                                    <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] skew-150"/></div>
                                    <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] skew-30"/></div>
                                </div>
                                <div className="w-full h-full col-span-2 flex">
                                    <div className="w-full h-full text-center grid content-center text-xl font-bold">$999999.99<span className="font-light text-xs">/stock</span></div>
                                    <div className="h-full grid content-center justify-items-center aspect-square">
                                        <div className='aspect-square border-2 border-[#B0E4CC] w-[80%] grid grid-cols-3 gap-1 p-1 items-center'>
                                            <div className='w-full h-[33.4%] bg-[#B0E4CC]'/>
                                            <div className='w-full h-[66.6%] bg-[#B0E4CC]'/>
                                            <div className='w-full h-full bg-[#B0E4CC]'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full mt-2 flex flex-col text-[#B0E4CC]">
                            <div className="h-full w-full flex flex-col border border-[#B0E4CC]">
                                <div className="text-center font-black p-2">BUY</div>
                                <div className="text-2xl font-bold grid grid-cols-3 content-center justify-items-center h-full">
                                    <div className="aspect-square w-[25%] text-center grid grid-cols-2 grid-rows-1 content-center text-2xl font-bold">
                                        <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] -skew-150 origin-top-right"/></div>
                                        <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] -skew-30 origin-top-left"/></div>
                                    </div>
                                    <div>999999</div>
                                    <div className="aspect-square w-[25%] text-center grid grid-cols-2 grid-rows-1 content-center text-2xl font-bold">
                                        <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] skew-150"/></div>
                                        <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] skew-30"/></div>
                                    </div>
                                </div>
                                <div className="w-full h-fit p-[0_1rem_1rem_1rem] flex justify-center"><div className="w-[50%] text-center font-black bg-[#B0E4CC] text-[#091413] border-[#091413]">Proceed</div></div>
                            </div>
                            <div className="h-full w-full flex mt-2 flex-col border border-[#B0E4CC]">
                                <div className="text-center font-black p-2">SELL</div>
                                <div className="text-2xl font-bold grid grid-cols-3 content-center justify-items-center h-full">
                                    <div className="aspect-square w-[25%] text-center grid grid-cols-2 grid-rows-1 content-center text-2xl font-bold">
                                        <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] -skew-150 origin-top-right"/></div>
                                        <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] -skew-30 origin-top-left"/></div>
                                    </div>
                                    <div>999999</div>
                                    <div className="aspect-square w-[25%] text-center grid grid-cols-2 grid-rows-1 content-center text-2xl font-bold">
                                        <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] skew-150"/></div>
                                        <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] skew-30"/></div>
                                    </div>
                                </div>
                                <div className="w-full h-fit p-[0_1rem_1rem_1rem] flex justify-center"><div className="w-[50%] text-center font-black bg-[#B0E4CC] text-[#091413] border-[#091413]">Proceed</div></div>
                            </div>
                        </div>
                        <div className="w-full h-[50%] bg-[#B0E4CC] mt-2 grid justify-items-center content-center font-black text-2xl text-[#091413]">
                            Research
                        </div>
                    </div>

                    <div className="w-full h-full border border-[#285A48] flex p-2">
                        <img src="" className="h-full aspect-square" />
                        {/* Name, price per stock, recent up or down, increase */}
                        <div className="w-full h-full text-red-50 ml-2 grid grid-cols-2 grid-rows-2 justify-items-center">
                            <div className="w-full h-full text-center grid content-center text-2xl font-bold">BRN</div>
                            <div className="aspect-square h-full text-center grid grid-cols-2 grid-rows-1 content-center text-2xl font-bold p-4">
                                <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] skew-150"/></div>
                                <div className='w-full h-full overflow-hidden grid'><div className="w-full h-[200%] bg-[#B0E4CC] skew-30"/></div>
                            </div>
                            <div className="w-full h-full col-span-2 flex">
                                <div className="w-full h-full text-center grid content-center text-xl font-bold">$999999.99<span className="font-light text-xs">/stock</span></div>
                                <div className="h-full grid content-center justify-items-center aspect-square">
                                    <div className='aspect-square border-2 border-[#B0E4CC] w-[80%] grid grid-cols-3 gap-1 p-1'>
                                        <div className='w-full h-full bg-[#B0E4CC] '/>
                                        <div className='w-full h-full bg-[#B0E4CC] '/>
                                        <div className='w-full h-full bg-[#B0E4CC] '/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      ):(
        <div className='text-center'>SORRY BUT THE GAME ONLY WORKS<br/> IN PORTRAIT ORIENTATION</div>
  )
    }

  </div>
}

export default Stocks