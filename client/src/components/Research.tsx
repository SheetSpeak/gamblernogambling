import { useEffect, useState } from "react"

export default function Research (){


    const [focus,setF]=useState("20%")
    const [lines,setLines]=useState([0,1,2,3])
    const [researching,setR]=useState("")
    const [eyeCord,setEC]=useState([window.innerWidth*0.5-window.innerWidth*0.1,window.innerHeight*0.5-window.innerHeight*((window.innerHeight-window.innerWidth*0.8)/(2*window.innerHeight))])
    


    useEffect(()=>{

        window.addEventListener("mousemove",(e)=>{
            if(e.clientX>=window.innerWidth*0.1&&e.clientX<=window.innerWidth*0.9&&e.clientY>=window.innerHeight*((window.innerHeight-window.innerWidth*0.8)/(2*window.innerHeight))&&e.clientY<=(window.innerHeight-window.innerHeight*((window.innerHeight-window.innerWidth*0.8)/(2*window.innerHeight)))){
                setEC([e.clientX-window.innerWidth*0.1,e.clientY-window.innerHeight*((window.innerHeight-window.innerWidth*0.8)/(2*window.innerHeight))])
            }
        })

        setTimeout(()=>{
            let l = [0,1,2,3]
            l.splice(Math.floor(Math.random()*4),1)
            setLines(l)
            setF("30%")
        },3000)
        setTimeout(()=>{
            setF("40%")
            let l = [0,1,2,3]
            l.splice(Math.floor(Math.random()*4),1)
            setLines(l)
        },5000)
        setTimeout(()=>{
            setF("50%")
            let l = [0,1,2,3]
            l.splice(Math.floor(Math.random()*4),1)
            setLines(l)
        },6500)
        setTimeout(()=>{
            setF("70%")
            let l = [0,1,2,3]
            l.splice(Math.floor(Math.random()*4),1)
            setLines(l)
        },7500)
        setTimeout(()=>{
            setR("none")
        },8000)

    },[])
    const ob = [...document.getElementsByClassName("w-[200%]"),...document.getElementsByClassName("w-[400%]"),...document.getElementsByClassName("w-[700%]")]

    ob.forEach((e)=>{
        const rect ="asd" 
        // WORK ON THIS LATER, FINISH THE PAGE
    })



    return <div className="w-full h-full bg-black absolute z-10 grid content-center justify-items-center overflow-hidden" style={{display:researching}}>

        <div className="w-[200%] origin-center skew-45 translate-[-50%] h-[20%] top-[50%] left-[50%] bg-green-200 absolute z-10 grid content-center text-center font-black" style={{display:(lines.includes(0))?("none"):("")}}>DISTRACTION</div>
        <div className="w-[200%] origin-center skew-45 translate-[-50%] h-[20%] top-[50%] left-[50%] bg-green-200 absolute z-10 grid content-center text-center font-black rotate-90"  style={{display:(lines.includes(0))?("none"):("")}}>DISTRACTION</div>

        <div className="w-[400%] origin-center translate-[-50%] h-[5%] bg-green-200 absolute top-[50%] left-[50%] z-10 text-center grid content-center font-black rotate-90" style={{display:(lines.includes(1))?("none"):("")}} >DISTRACTION</div>
        <div className="w-[200%] origin-center translate-[-50%] h-[5%] bg-green-200 absolute top-[50%] left-[50%] z-10 text-center grid content-center font-black" style={{display:(lines.includes(1))?("none"):("")}} >DISTRACTION</div>
        
        <div className="w-full h-screen absolute grid grid-cols-2 justify-items-center items-center z-10" style={{display:(lines.includes(2))?("none"):("")}}>
            <div className="w-[700%] h-[5%] bg-green-200 z-10 text-center grid content-center font-black rotate-90" >DISTRACTION</div>
            <div className="w-[700%] h-[5%] bg-green-200 z-10 text-center grid content-center font-black rotate-90" >DISTRACTION</div>
        </div>
        <div className="w-full h-screen absolute grid grid-rows-4 grid-cols-1 items-center content-center justify-items-center z-10" style={{display:(lines.includes(2))?("none"):("")}}>
            <div/>
            <div className="w-[200%] h-[10%] bg-green-200 z-10 text-center grid content-center font-black" >DISTRACTION</div>
            <div className="w-[200%] h-[10%] bg-green-200 z-10 text-center grid content-center font-black" >DISTRACTION</div>
            <div/>
        </div>

        <div className="w-full h-screen absolute grid grid-rows-1 grid-cols-1 items-center justify-items-center z-10" style={{display:(lines.includes(3))?("none"):("")}}>
            <div className="w-full rounded-full aspect-square border-green-200 border-[7rem] z-10 text-center grid content-center font-black justify-items-center" >
            </div>
        </div>



        <div id="eye" className="w-[80%] aspect-square bg-red-100 rounded-full overflow-hidden relative">
            <div className="w-[120%] grid content-center justify-items-center aspect-square bg-white rounded-full origin-center translate-[-50%] absolute transition-all" style={{top:`${eyeCord[1]}px`,left:`${eyeCord[0]}px`}}><div className="w-[40%] aspect-square rounded-full bg-brown grid content-center justify-items-center"><div className="aspect-square bg-black rounded-full transition-all" style={{width:focus}}/></div></div>
        </div>
    </div>
}