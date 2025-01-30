import React, { useState } from 'react'
import { ThemeContext, themes } from '../providers/themes/Index'
import TheamHeader from '../components/ThemeHead/TheamHeader'
import './contxt.css'
import Home from '../components/ThemeHead/Home';

export default function Contxt() {

    const[theme,setTheme] = useState(themes.dark);

    const changeTheme = () => {
        setTheme(theme=== themes.light ? themes.dark : themes.light);
    }

  return (
    <ThemeContext.Provider value={theme}>
        <Home>
        
    
    <TheamHeader />

    <button onClick={changeTheme}>change theme</button>
    </Home>
    </ThemeContext.Provider>
  )
}
