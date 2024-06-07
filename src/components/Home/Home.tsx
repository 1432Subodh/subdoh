import { ArrowRightIcon, DashboardIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

function Home() {
    return (
        <div className='sm:py-20 py-16 flex flex-col gap-1 items-center'>
            <Link href={'/lodge'} className='text-sm px-4 rounded-md py-1 dark:bg-[#27272a] hover:dark:bg-[#303031] bg-[#dddddd] hover:bg-[#eeeeee] transition-all font-semibold flex items-center gap-2'>
                <DashboardIcon />
                <span>Introducing Lodge Finder</span>
                <ArrowRightIcon />
            </Link>
            <h2 className="scroll-m-20 text-4xl px-3 font-extrabold tracking-tight lg:text-5xl text-center">
                Find your stay easily in Hazaribagh
            </h2>
            <p className="leading-5 mt-3 text-sm text-center w-full sm:px-[300px] px-5">
                The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
            </p>
            <div className='flex gap-3 mt-5'>
                <Link href={'/lodge'}>
                    <Button variant={'default'} className='px-3 py-1'>Get Started</Button>
                </Link>
                <Link href={'https://github.com/1432Subodh'} target="_blank">
                    <Button variant={'outline'} className='px-5 py-1'>Github</Button>
                </Link>
            </div>
        </div>
    )
}

export default Home