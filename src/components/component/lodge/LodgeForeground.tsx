import React from 'react'

import ExtraThings from './ExtraThings'
import Cards from './Cards'

function LodgeForeground() {
    return (
        <div className='p-2 w-full h-[88vh] overflow-y-scroll'>
            <ExtraThings />
            <div className='flex justify-between items-center gap-1 flex-wrap mt-2'>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </div>
    )
}

export default LodgeForeground