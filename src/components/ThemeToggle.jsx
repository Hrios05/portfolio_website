import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'


export const ThemeToggle = () => {
    // if isDarkMode is true, then setIsDarkMode will operate
    const [isDarkMode, setIsDarkMode] = useState(false)
    //no dependecny means it will run everytime the component renders
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark')
            setIsDarkMode(true)

        }
        else {
            document.documentElement.classList.remove('dark')
            setIsDarkMode(false)
        }

    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setIsDarkMode(false)
        }
        else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setIsDarkMode(true)
        }
    }
    // here we pass in a function toggle theme into on click
    return <button onClick={toggleTheme} className={cn('fixed max-sm:hidden top-5 right-5 z-5 p-2 rounded-full transition-colors duration-300',
        'focus:outline-hidden'
    )}> {isDarkMode ? (<Sun className='h-6 w-6 text-yellow-300' />) : (<Moon className='h-6 w-6 text-blue-900' />)} </button>
}
