'use client'
import { Button } from '@/components/ui/button'
import { Menu, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import React, { useState } from 'react'

type Props = {}
type Bubble = 'Pricing' | "Home" | 'Contact'
const LandingPageNavBar = (props: Props) => {
    const activeButtonClasses = "bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80"

    let [activeBubble, setActiveBubble] = useState<Bubble>("Home")

    return (
        <div className="flex w-full justify-between items-center">
            <div className="text-3xl font-semibold flex items-center gap-x-3">
                <Menu className="w-8 h-8" />
                <Image
                    alt="logo"
                    src="/opal-logo.svg"
                    width={40}
                    height={40}
                />
                Opal
            </div>
            <div className="hidden gap-x-10 items-center lg:flex">
                <Link
                    href="/"
                    // className="bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80"
                    className={activeBubble === "Home" ? activeButtonClasses : ""}
                    onClick={() => setActiveBubble("Home")}
                    style={{ "transition": "all", 'transitionDelay': '1ms' }}
                >
                    Home
                </Link>
                <Link href="/"
                    className={activeBubble === "Pricing" ? activeButtonClasses : ""}
                    onClick={() => setActiveBubble("Pricing")}
                    style={{ "transition": "all", 'transitionDelay': '1ms' }}
                >Pricing</Link>
                <Link href="/"
                    className={activeBubble === "Contact" ? activeButtonClasses : ""}
                    onClick={() => setActiveBubble("Contact")}
                    style={{ "transition": "all", 'transitionDelay': '1ms' }}
                >Contact</Link>
            </div>
            <Link href="/auth/sign-in">
                <Button className="text-base flex gap-x-2">
                    <User fill="#000" />
                    Login
                </Button>
            </Link>
        </div >
    )
}

export default LandingPageNavBar
