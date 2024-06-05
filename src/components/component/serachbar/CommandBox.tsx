'use client'
import {
    CalendarIcon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    PersonIcon,
    RocketIcon,
} from "@radix-ui/react-icons"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link"
import { useState } from "react"
import { DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"


export function CommandBox() {
    const [data, setData] = useState('')

    return (
        <>
            <Command className="rounded-lg border shadow-md ">
                <CommandInput placeholder="Type a command or search..." onChangeCapture={(e:any)=>setData(e.target.value)} />
                <CommandList>
                    <CommandEmpty>
                        <div className="bg-primary mx-1 text-left px-3 py-2 rounded-md font-semibold ">
                            Search  {data}
                        </div>
                    </CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <Link href={'/dashboard'}>
                            <DialogClose asChild>
                                <div>
                                    <CommandItem>
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        <span>Dashboard</span>
                                    </CommandItem>
                                </div>
                            </DialogClose>
                        </Link>
                        <CommandItem>
                            <FaceIcon className="mr-2 h-4 w-4" />
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem>
                            <RocketIcon className="mr-2 h-4 w-4" />
                            <span>Launch</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <PersonIcon className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                            <span>Mail</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <GearIcon className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </>

    )
}
