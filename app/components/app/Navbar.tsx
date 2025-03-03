"use client"

import Image from "next/image"
import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


const navItems = [
    { title: "Home", href: "#" },
    {
        title: "About",
        href: "#about",
    },
    { title: "Services", href: "#services" },
    { title: "Contact", href: "#contact" },
]

export default function Navbar() {

    return (
        <nav className="fixed flex top-0 z-50 w-full items-center justify-center">
            <div className="container flex h-14 lg:w-1/2 sm:w-full backdrop-blur justify-between bg-slate-300/20 rounded-lg m-4 p-4 items-center">
                <Link href="/" className="flex items-center">
                    <Image src="/logo.png" alt="OZ Istanbul" width={40} height={40} />
                    <span className="font-bold">ÖZ Istanbul</span>
                </Link>
                <NavigationMenu>
                    <NavigationMenuList className="hidden md:flex gap-6">
                        {navItems.map((item) => {
                            return (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink href={item.href}>{item.title}</NavigationMenuLink>
                                </NavigationMenuItem>
                            )
                        })}
                    </NavigationMenuList>
                </NavigationMenu>
                
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="shirink-0 md:hidden bg-transparent border-none" variant="outline" size="icon">
                        <Menu className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="backdrop-blur bg-slate-300/10">
                        <div className="flex flex-col gap-4 p-4 text-white">
                            {navItems.map((item) => {
                                return (
                                    <Link key={item.title} href
                                    ={item.href} className="text-xl">
                                        {item.title}
                                    </Link>
                                )
                            })}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}




