"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

interface MenuBanner {
    title: string;
    color: string;
    href: string;
}

const MenuBanner: React.FC<MenuBanner> = ({ title, color, href }) => {
    const router = useRouter()
    const handleClick = () => {
        router.push(href)
    }
    return (
        <div
            className={`flex items-center justify-center h-96 ${color} bg-opacity-80 rounded-3xl shadow-lg cursor-pointer hover:scale-[1.03] duration-500`}
            onClick={handleClick}
        >
            <p className="text-5xl font-semibold">{title}</p>
        </div>
    )
}

export default MenuBanner