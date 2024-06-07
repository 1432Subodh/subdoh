import Cards from '@/components/component/lodge/Cards'
import React from 'react'

function page() {
  return (
    <div className='pt-3 flex flex-wrap gap-1 justify-between min-h-screen sm:px-10 px-0'>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
    </div>
  )
}

export default page