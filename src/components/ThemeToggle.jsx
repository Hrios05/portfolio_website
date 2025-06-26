import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
export const ThemeToggle = () => {
    // if isDarkMode is true, then setIsDarkMode will operate
    const [isDarkMode, setIsDarkMode] = useState(false)
    return <button> {isDarkMode ? <Sun /> : <Moon />} </button>
}