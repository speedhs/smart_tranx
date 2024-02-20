import Image from 'next/image'
import React, { ReactElement } from 'react'
import { Separator } from '../ui/separator'


interface BlogCards{
    title:string,
    image:string
}
const Blogcard:React.FC<BlogCards> = ({
    title,
    
    image
}) => {
  return (
    <div className='min-w-40 max-w-64 items-center w-64  h-auto rounded-sm overflow-hidden shadow-xl'>
        {image ? (<Image src={image}alt='cardlogo' width={256} height={100} />) :(<Image src={"/dummy.jpeg"}alt='dummy' width={256} height={100} />) }
        <div className='p-3 overflow-hidden'>
            <h1 className='text-left font-bold  text-slate-900'>{title}</h1>
        <Separator className='w-60 ' />
       
        </div>
        
    </div>
  )
}

export default Blogcard