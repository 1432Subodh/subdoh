import { Button } from '@/components/ui/button'
import React from 'react'

function View() {
    return (
        <div className='flex w-full  sm:px-20 px-5 justity-between flex-col sm:flex-row mt-3'>
            <div className='sm:w-[35vw] w-full sm:min-h-[50vh] p-2'>
                <img src="https://imgs.search.brave.com/TSjlp9MBnbgtjNoEjZkUSvPXc85w2PE_P8OQoE6PZC8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaG9taWZ5LmNv/bS92MTUzMzc1NTM0/Ny9wL3Bob3RvL2lt/YWdlLzI2NzA3OTUv/MjkzNjU0MjNfMTc4/MTE1NDQ2NTI2MzA3/NF81MzUyOTU5Nzgw/MjE1ODg4MDQ3X24u/anBn" alt="" className='w-full h-56 object-cover rounded-md' />
                <div className='mt-3 flex gap-2'>
                    <div className='w-20 h-16 rounded-md bg-gray-100 dark:bg-zinc-900'></div>
                    <div className='w-20 h-16 rounded-md bg-gray-100 dark:bg-zinc-900'></div>
                    <div className='w-20 h-16 rounded-md bg-gray-100 dark:bg-zinc-900'></div>
                </div>
            </div>
            <div className='sm:w-[55vw] w-full min-h-[50vh] p-2'>
                <h1 className='text-2xl pb-1'>Lorem, ipsum dolor.</h1>
                <p className='text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quaerat quod debitis cupiditate aut numquam eius, doloribus ipsam eos saepe accusamus commodi, pariatur fugit, est quis nesciunt ipsum labore eaque beatae! Mollitia, reprehenderit. Qui!</p>
                <div className='flex items-center gap-2 mt-5'>
                    <Button variant={'default'} size={'xs'}>Add to Favorite</Button>
                    <span className='text-lg'>1200 Rs.</span>
                </div>
            </div>
        </div>
    )
}

export default View