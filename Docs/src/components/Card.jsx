import React, {useState} from 'react'
import { FaFileContract } from "react-icons/fa";
import { MdDownload, MdScale } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import {motion} from "framer-motion"
function Card({data ,reference}) {
    return(
        <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className=' relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaFileContract/>
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 bg-sky-200 w-full left-0'></div>
        <div>
                <div className='flex items-center py-3 px-8 justify-between mb-3'></div>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center jsutify-center  '>
                    {data.close?<IoIosCloseCircle/>:<MdDownload size=".7em" color="#fff"/>}
                </span>
        </div>
        {  //we can also use ternary operator here
            data.tag.isOpen && <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div>
        }
       
        </motion.div>
        
        </>
    )
}
export default Card