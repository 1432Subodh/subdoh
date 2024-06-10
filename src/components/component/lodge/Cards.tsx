import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'


function Cards() {
    return (
        <Link href={'#'}>

            <div className='sm:w-52 w-[45vw] flex flex-col rounded h-56 border bg-green-500 dark:bg-[#151518] p-1 justify-between '>
                <img src="img.webp" alt="" className='w-full h-[60%] rounded-sm object-cover' />
                <h1 className='text-lg font-sembold'>Lorem ipsum dolor .</h1>
                <p className='text-xs'>Lorem ipsum dolor sit amet, </p>
                <div className='flex justify-between item-center'>
                    <div className='flex items-center'>

                    <Star size={12}/>
                    <Star size={12}/>
                    <Star size={12}/>
                    <Star size={12}/>
                    </div>
                    <span className='underline text-primary text-sm pb-2'>More</span>
                </div>
            </div>
        </Link>

    )
}

export default Cards