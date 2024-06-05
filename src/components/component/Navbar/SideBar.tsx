import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'


function SideBar() {
    return (
        <div className=''>

            <Sheet >
                <SheetTrigger>
                    <div className='px-2 py-2 bg-background hover:bg-accent rounded-md scale-110'>
                        <HamburgerMenuIcon className="h-4 w-4 " width="18" height="18"/>
                    </div>
                </SheetTrigger>
                <SheetContent side={'left'}>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>

    )
}

export default SideBar