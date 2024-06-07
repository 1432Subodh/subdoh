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
import { ChevronRight } from 'lucide-react'


function Cards() {
    return (
        <div className='sm:w-[20vw] w-[46vw] h-72 justify-between'>

            <Card className='sm:h-[305px] h-[260px]'>
                <div className='w-full p-2 '>
                    <img
                        src="/image.png"
                        alt="Picture of the author"
                        
                        className='w-full h-40 object-cover rounded-md'
                    />
                </div>
                <CardHeader className='p-2'>
                    <CardTitle className='text-lg pb-0'>Chotu lodge</CardTitle>
                    <CardDescription className='text-xs sm:inline-block hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, ab in? Magnam!</CardDescription>
                </CardHeader>
               
                <CardFooter className='flex justify-between px-2'>
                    <p className='text-normal'>800 Rs.</p>
                    <Button variant={'default'} className='text-sm pr-1' size={'xs'}>More <ChevronRight height={16}/></Button>
                </CardFooter>
            </Card>
        </div>

    )
}

export default Cards