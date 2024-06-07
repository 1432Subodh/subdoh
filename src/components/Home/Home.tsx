import { ArrowRightIcon, DashboardIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

function Home() {
    return (
        <div className='sm:py-20 py-16 flex flex-col gap-1 items-center'>
            <Link href={'#'} className='text-sm px-4 rounded-md py-1 dark:bg-[#27272a] hover:dark:bg-[#303031] bg-[#dddddd] hover:bg-[#eeeeee] transition-all font-semibold flex items-center gap-2'>
                <DashboardIcon />
                <span>Introducing Lodge Finder</span>
                <ArrowRightIcon />
            </Link>
            <h2 className="scroll-m-20 text-4xl px-5 font-extrabold tracking-tight lg:text-5xl text-center">
                Find your stay easily in Hazaribagh
            </h2>
            <p className="leading-5 mt-3 text-sm text-center w-full sm:px-[300px] px-5">
                The king, seeing how much happier his subjects were, realized the error of
                his ways and repealed the joke tax.
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit vitae eveniet quas cumque ad magni exercitationem sunt officiis adipisci, dolore, voluptates quae nisi!</p>
        </div>
    )
}

export default Home