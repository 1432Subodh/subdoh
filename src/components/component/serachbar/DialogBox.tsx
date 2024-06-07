import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { CommandBox } from './CommandBox'
import { Button } from '@/components/ui/button'
import { Command, CommandInput } from '@/components/ui/command'
import { document } from 'postcss'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'


function DialogBox() {

    return (
        <Dialog >
            <DialogTrigger>
                <div className='sm:w-96 w-40 border h-8 rounded-md flex items-center justify-between px-3'>
                    <div className='flex items-center gap-1'>
                        <MagnifyingGlassIcon height={17} width={17} />
                        <span className='text-gray-400 text-sm'>Search here....</span>
                    </div>
                    <span className='dark:bg-zinc-800 bg-zinc-200 px-2 py-[3px] text-[10px] hidden sm:inline-block rounded-sm'>Ctrl+B</span>
                </div>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>

                        <CommandBox />

                </DialogHeader>

            </DialogContent>

        </Dialog>

    )
}

export default DialogBox