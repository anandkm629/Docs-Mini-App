import React from 'react'
import Card from './Card'

function Foreground(){
    const ref = useref(null);
    const data = [
   {desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
   filesize:".9mb",
   close:true,
   tag:{
    isOpen:true,tagTitle:"Download Now",tagColor:"green"
   }
    },
    {desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
   filesize:".9mb",
   close:true,
   tag:{
    isOpen:true,tagTitle:"Download Now",tagColor:"green"
   }
    },
    {desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
   filesize:".9mb",
   close:true,
   tag:{
    isOpen:true,tagTitle:"Download Now",tagColor:"green"
   }
    }
    ];
    return(
        <>
        <div ref={ref} className=' fixed top-0 left-0 w-full h-full flex gap-8 flex-wrap p-5'></div>
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
        </>
    )
}
export default Foreground