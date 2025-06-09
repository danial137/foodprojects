"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

const ThemeToggler = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, systemTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    },[])
    if (!mounted) return null;
    const currenTheme = theme === 'system' ? systemTheme : theme
    return (
        <button onClick={() => setTheme(currenTheme === 'dark' ? 'light' : 'dark')} className='p-2 transition w-10 h-10 bg-blue-950 dark:bg-white rounded-full flex items-center justify-center flex-col'>
            {currenTheme === 'dark' ? (
            
            <BiSun className='text-white dark:text-black w-7 h-7 cursor-pointer '/>

            ) : (
                    <BiMoon className='text-white dark:text-black w-7 h-7 cursor-pointer'/>
            )}
        </button>
    )
}

export default ThemeToggler