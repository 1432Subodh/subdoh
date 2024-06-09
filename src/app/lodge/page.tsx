import Cards from '@/components/component/lodge/Cards'
import React from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Fillter from '@/components/component/lodge/Fillter'
import LodgeForeground from '@/components/component/lodge/LodgeForeground'

function page() {
  return (
    <>
    <ResizablePanelGroup
      direction="horizontal"
      className="sm:h-[100vh]  w-full rounded-lg border"
      >
      <ResizablePanel defaultSize={20} className='hidden sm:inline-block'>
        <Fillter/>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <LodgeForeground/>
      </ResizablePanel>
    </ResizablePanelGroup>
      </>
  )
}

export default page