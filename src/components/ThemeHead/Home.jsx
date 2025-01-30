import React, { useContext } from 'react'
import { ThemeContext } from '../../providers/themes/Index'

export default function Home(props) {

    const theme = useContext(ThemeContext)

  return (
    <div style={{background: theme.background}} >  
    <h1 style={{color: theme.foreground}}>Contxt</h1>
    {props.children}
    <br />
    <br />
    <br />
    </div>
  )
}
