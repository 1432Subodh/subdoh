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

            <div className='sm:w-52 w-[95vw] sm:gap-0 gap-3  flex sm:flex-col flex-row rounded sm:h-56 h-24 border bg-green-500 dark:bg-[#151518] p-1 sm:justify-between '>
                <img src="img.webp" alt="" className='sm:w-full w-[150px] sm:h-[60%] h-full rounded-sm object-cover' />
                <div className='w-full'>

                    <h1 className='sm:text-lg text-normal font-sembold'>Lorem ipsum dolor .</h1>
                    <p className='text-xs'>Lorem ipsum dolor sit amet, </p>
                    <div className='flex justify-between item-center w-full'>
                        <div className='flex items-center'>

                            <Star size={12} />
                            <Star size={12} />
                            <Star size={12} />
                            <Star size={12} />
                        </div>
                        <span className='underline text-primary text-sm pb-2'>More</span>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default Cards