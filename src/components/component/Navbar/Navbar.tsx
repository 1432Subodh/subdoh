import React from 'react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from '../../ModeToggle'
import { NavMenu } from './NavMenu'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DialogBox from '../serachbar/DialogBox'
import SideBar from './SideBar'
import Link from 'next/link'
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"



function Navbar() {
  return (
    <nav className='flex w-full items-center py-3 sm:px-10 px-5 border-b gap-3 justify-between fixed top-0 left-0 bg-background z-10'>
      <div className='flex items-center gap-3'>
        <div className='flex gap-2 items-center'>
          <div className='inline-block sm:hidden pt-1'>
            <SideBar />
          </div>
          <Link href={'/'} className='items-center gap-2 hidden sm:flex cursor-pointer'>
            <img src="logo.svg" alt="" className='dark:invert ' width={25} />
            <span className=" font-bold">subodh/ui</span>
          </Link>
        </div>
        <NavMenu />
      </div>
      <div className='flex gap-5 items-center'>
      <DialogBox />
        <div className='flex gap-2 items-center'>

        <ModeToggle />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </div>
      </div>
    </nav>
  )
}

export default Navbar